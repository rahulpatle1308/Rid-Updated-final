const express = require("express");
const path = require("path");
const { exec } = require("child_process");
const fs = require("fs");
const crypto = require("crypto");

// const app = express();

const router = express.Router();   // ✅ ADD THIS




const TEMP_DIR = path.join(__dirname, "temp");
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR);

// ---------- LANGUAGE CONFIGURATION ----------
const LANGUAGE_CONFIG = {
  python: {
    image: "python:3.9-alpine",
    ext: ".py",
    cmd: (file) => `python ${file}`,
  },
  javascript: {
    image: "node:16-alpine",
    ext: ".js",
    cmd: (file) => `node ${file}`,
  },
  cpp: {
    image: "gcc:latest",
    ext: ".cpp",
    cmd: (file) => `sh -c "g++ ${file} -o /tmp/output && /tmp/output"`,
  },
  java: {
    image: "eclipse-temurin:11-jdk",
    ext: ".java",
    cmd: () => `sh -c "javac -d /tmp /app/Main.java && java -cp /tmp Main"`,
  },
  c: {
    image: "gcc:latest",
    ext: ".c",
    cmd: (file) => `sh -c "gcc ${file} -o /tmp/output && /tmp/output"`,
  },
  // ✅ C# – अब सीधे compilation, हर बार output देगा
  csharp: {
    image: "mcr.microsoft.com/dotnet/sdk:6.0",
    ext: ".cs",
    wrap: (code) => {
      // Auto‑wrap if no class with Main
      if (/class\s+\w+\s*{[\s\S]*static\s+void\s+Main\s*\(/.test(code)) {
        return code;
      }
      return `using System;
class Program {
    static void Main() {
${code.split('\n').map(line => '        ' + line).join('\n')}
    }
}`;
    },
    // ✅ बिल्कुल सीधा कमांड – कोई dotnet new नहीं, कोई network नहीं
    cmd: (file) => `
      sh -c "
        cp /app/${file} /tmp/program.cs &&
        csc /tmp/program.cs -out:/tmp/program.exe 2>&1 &&
        /tmp/program.exe
      "
    `,
  },
};

// Pre‑pull Docker images (non‑blocking)
function prePullImages() {
  const images = new Set(Object.values(LANGUAGE_CONFIG).map(cfg => cfg.image));
  for (const image of images) {
    exec(`docker pull ${image}`, (err) => {
      if (err) console.error(`Failed to pull ${image}`);
      else console.log(`Pulled ${image}`);
    });
  }
}
prePullImages();

// ---------- WRAPPING HELPERS (C, C++, Java) ----------
function wrapCCode(code) {
  const hasMain = /int\s+main\s*\(|void\s+main\s*\(/.test(code);
  if (hasMain) return code;
  let includes = '';
  if (/printf|scanf|puts|gets/.test(code) && !code.includes('#include <stdio.h>'))
    includes = '#include <stdio.h>\n';
  const indented = code.split('\n').map(line => '    ' + line).join('\n');
  return `${includes}int main() {\n${indented}\n    return 0;\n}`;
}

function wrapCppCode(code) {
  const hasMain = /int\s+main\s*\(|void\s+main\s*\(/.test(code);
  if (hasMain) return code;
  let includes = '';
  if (/cout|cin|endl/.test(code) && !code.includes('#include <iostream>'))
    includes = '#include <iostream>\nusing namespace std;\n';
  const indented = code.split('\n').map(line => '    ' + line).join('\n');
  return `${includes}int main() {\n${indented}\n    return 0;\n}`;
}
// ----------------------------------------------------------------

// ---------- EXECUTE ENDPOINT ----------
router.post("/execute", async (req, res) => {
  const User = require("../models/user");

  const { language, files, stdin = "" } = req.body;

  if (!language || !files?.[0]?.content) {
    return res.status(400).json({ error: "Invalid request" });
  }

  const config = LANGUAGE_CONFIG[language];
  if (!config) {
    return res.status(400).json({ error: "Unsupported language" });
  }

  let code = files[0].content;

  // Wrapping
  if (language === "c") code = wrapCCode(code);
  else if (language === "cpp") code = wrapCppCode(code);
  else if (language === "java") {
    const hasClass = /class\s+/.test(code);
    const hasMain = /main\s*\(/.test(code);
    if (!hasClass || !hasMain) {
      const indented = code.split('\n').map(l => '        ' + l).join('\n');
      code = `public class Main {\n    public static void main(String[] args) {\n${indented}\n    }\n}`;
    }
  } else if (language === "csharp" && config.wrap) {
    code = config.wrap(code);
  }

  const filename = language === "java"
    ? "Main.java"
    : crypto.randomBytes(6).toString("hex") + config.ext;

  const filepath = path.join(TEMP_DIR, filename);
  fs.writeFileSync(filepath, code);

  const mountPath = TEMP_DIR.replace(/\\/g, "/");

  // ✅ FIRST define dockerCmd
  const dockerCmd = `echo "${stdin.replace(/"/g, '\\"')}" | docker run -i --rm --memory=256m --cpus=0.5 --network none -v ${mountPath}:/app:ro -w /app ${config.image} ${config.cmd(filename)}`;

  console.log("Running:", dockerCmd);

  // ✅ THEN use exec
 exec(dockerCmd, { timeout: 10000, maxBuffer: 10 * 1024 * 1024 }, async (err, stdout, stderr) => {

    fs.unlink(filepath, () => {});

    // count update
    if (!err) {
      try {
        const userId = req.session?.userId;
        if (userId) {
          await User.findByIdAndUpdate(userId, {
            $inc: { techInterviewCount: 1 }
          });
        }
      } catch (e) {
        console.log("Tech count error:", e);
      }
    }

    if (err) {
      let errorMessage = stderr || err.message;

      if (err.code === 'ENOENT') errorMessage = "Docker not installed";
      else if (err.signal === 'SIGKILL') errorMessage = "Timeout / Memory limit";

      return res.json({ run: { stdout: "", stderr: errorMessage } });
    }

    res.json({ run: { stdout, stderr } });
  });
});


module.exports = router;