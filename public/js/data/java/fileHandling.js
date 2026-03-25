QuizData.questions.push(
  // FILE CREATION AND BASIC OPERATIONS (5)
  {
    id: "file_1",
    topicId: "file",
    question: "Create a new file using File class.",
    mathSolution: "Use createNewFile() method",
    codeSolution:
      'import java.io.*;\nFile file = new File("test.txt");\ntry {\n    if(file.createNewFile()) {\n        System.out.println("File created: " + file.getName());\n    } else {\n        System.out.println("File already exists");\n    }\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "createNewFile() returns boolean",
  },
  {
    id: "file_2",
    topicId: "file",
    question: "Check if file exists and get file properties.",
    mathSolution: "Use exists(), length(), etc.",
    codeSolution:
      'File file = new File("test.txt");\nif(file.exists()) {\n    System.out.println("File name: " + file.getName());\n    System.out.println("Absolute path: " + file.getAbsolutePath());\n    System.out.println("Size: " + file.length() + " bytes");\n    System.out.println("Readable: " + file.canRead());\n    System.out.println("Writable: " + file.canWrite());\n} else {\n    System.out.println("File does not exist");\n}',
    hint: "File class has many property methods",
  },
  {
    id: "file_3",
    topicId: "file",
    question: "Delete a file.",
    mathSolution: "Use delete() method",
    codeSolution:
      'File file = new File("temp.txt");\nif(file.delete()) {\n    System.out.println("Deleted: " + file.getName());\n} else {\n    System.out.println("Delete failed");\n}',
    hint: "delete() returns boolean",
  },
  {
    id: "file_4",
    topicId: "file",
    question: "Rename or move a file.",
    mathSolution: "Use renameTo() method",
    codeSolution:
      'File oldFile = new File("old.txt");\nFile newFile = new File("new.txt");\nif(oldFile.renameTo(newFile)) {\n    System.out.println("Renamed successfully");\n} else {\n    System.out.println("Rename failed");\n}',
    hint: "renameTo() moves/renames file",
  },
  {
    id: "file_5",
    topicId: "file",
    question: "Create directory and nested directories.",
    mathSolution: "Use mkdir() and mkdirs()",
    codeSolution:
      'File dir = new File("myFolder");\nif(dir.mkdir()) {\n    System.out.println("Directory created");\n}\n\nFile nested = new File("parent/child/grandchild");\nif(nested.mkdirs()) {\n    System.out.println("Nested directories created");\n}',
    hint: "mkdirs() creates all parent directories",
  },

  // FILE WRITING (5)
  {
    id: "file_6",
    topicId: "file",
    question: "Write to file using FileWriter.",
    mathSolution: "FileWriter writes character data",
    codeSolution:
      'try {\n    FileWriter writer = new FileWriter("output.txt");\n    writer.write("Hello World!\\n");\n    writer.write("Second line");\n    writer.close();\n    System.out.println("Written successfully");\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "FileWriter for text files",
  },
  {
    id: "file_7",
    topicId: "file",
    question: "Write to file using BufferedWriter.",
    mathSolution: "BufferedWriter for better performance",
    codeSolution:
      'try {\n    BufferedWriter writer = new BufferedWriter(new FileWriter("buffered.txt"));\n    writer.write("Buffered writing");\n    writer.newLine();\n    writer.write("Another line");\n    writer.close();\n    System.out.println("Buffered write complete");\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "BufferedWriter has newLine() method",
  },
  {
    id: "file_8",
    topicId: "file",
    question: "Append to existing file.",
    mathSolution: "Use FileWriter with append flag",
    codeSolution:
      'try {\n    FileWriter writer = new FileWriter("log.txt", true); // true for append\n    writer.write("New log entry at " + new java.util.Date() + "\\n");\n    writer.close();\n    System.out.println("Appended to file");\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Pass true as second parameter to append",
  },
  {
    id: "file_9",
    topicId: "file",
    question: "Write to file using PrintWriter.",
    mathSolution: "PrintWriter has print/println methods",
    codeSolution:
      'try {\n    PrintWriter pw = new PrintWriter(new File("print.txt"));\n    pw.println("PrintWriter example");\n    pw.printf("Formatted: %d + %d = %d\\n", 5, 3, 5+3);\n    pw.close();\n    System.out.println("PrintWriter done");\n} catch(FileNotFoundException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "PrintWriter supports format strings",
  },
  {
    id: "file_10",
    topicId: "file",
    question: "Write binary data using FileOutputStream.",
    mathSolution: "FileOutputStream for bytes",
    codeSolution:
      'try {\n    FileOutputStream fos = new FileOutputStream("binary.dat");\n    byte[] data = {65, 66, 67, 68, 69}; // A, B, C, D, E\n    fos.write(data);\n    fos.close();\n    System.out.println("Binary data written");\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "FileOutputStream writes bytes",
  },

  // FILE READING (5)
  {
    id: "file_11",
    topicId: "file",
    question: "Read file using FileReader.",
    mathSolution: "FileReader reads character by character",
    codeSolution:
      'try {\n    FileReader reader = new FileReader("input.txt");\n    int character;\n    while((character = reader.read()) != -1) {\n        System.out.print((char)character);\n    }\n    reader.close();\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "read() returns -1 at end of file",
  },
  {
    id: "file_12",
    topicId: "file",
    question: "Read file using BufferedReader (line by line).",
    mathSolution: "BufferedReader reads lines efficiently",
    codeSolution:
      'try {\n    BufferedReader br = new BufferedReader(new FileReader("input.txt"));\n    String line;\n    while((line = br.readLine()) != null) {\n        System.out.println(line);\n    }\n    br.close();\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "readLine() returns null at EOF",
  },
  {
    id: "file_13",
    topicId: "file",
    question: "Read file using Scanner.",
    mathSolution: "Scanner provides parsing methods",
    codeSolution:
      'try {\n    Scanner scanner = new Scanner(new File("data.txt"));\n    while(scanner.hasNextLine()) {\n        String line = scanner.nextLine();\n        System.out.println(line);\n    }\n    scanner.close();\n} catch(FileNotFoundException e) {\n    System.out.println("File not found: " + e);\n}',
    hint: "Scanner has hasNextLine() and nextLine()",
  },
  {
    id: "file_14",
    topicId: "file",
    question: "Read binary data using FileInputStream.",
    mathSolution: "FileInputStream reads bytes",
    codeSolution:
      'try {\n    FileInputStream fis = new FileInputStream("binary.dat");\n    int byteData;\n    while((byteData = fis.read()) != -1) {\n        System.out.print(byteData + " ");\n    }\n    fis.close();\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "read() returns int from 0-255 or -1",
  },
  {
    id: "file_15",
    topicId: "file",
    question: "Read file into byte array.",
    mathSolution: "Read all bytes at once",
    codeSolution:
      'try {\n    File file = new File("sample.txt");\n    byte[] fileData = new byte[(int)file.length()];\n    FileInputStream fis = new FileInputStream(file);\n    fis.read(fileData);\n    fis.close();\n    System.out.println(new String(fileData));\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Read entire file into byte array",
  },

  // FILE AND DIRECTORY LISTING (3)
  {
    id: "file_16",
    topicId: "file",
    question: "List all files in a directory.",
    mathSolution: "Use list() or listFiles()",
    codeSolution:
      'File dir = new File("."); // current directory\nFile[] files = dir.listFiles();\nSystem.out.println("Files in current directory:");\nfor(File f : files) {\n    if(f.isFile()) {\n        System.out.println("File: " + f.getName());\n    } else if(f.isDirectory()) {\n        System.out.println("Dir:  " + f.getName());\n    }\n}',
    hint: "listFiles() returns File array",
  },
  {
    id: "file_17",
    topicId: "file",
    question: "Filter files by extension.",
    mathSolution: "Use FilenameFilter",
    codeSolution:
      'File dir = new File(".");\nFilenameFilter txtFilter = new FilenameFilter() {\n    public boolean accept(File dir, String name) {\n        return name.endsWith(".txt");\n    }\n};\nString[] txtFiles = dir.list(txtFilter);\nSystem.out.println("Text files:");\nfor(String f : txtFiles) {\n    System.out.println(f);\n}',
    hint: "FilenameFilter filters file names",
  },
  {
    id: "file_18",
    topicId: "file",
    question: "Recursively list all files in subdirectories.",
    mathSolution: "Recursive directory traversal",
    codeSolution:
      'void listFilesRecursive(File dir) {\n    File[] files = dir.listFiles();\n    if(files != null) {\n        for(File f : files) {\n            if(f.isDirectory()) {\n                listFilesRecursive(f);\n            } else {\n                System.out.println(f.getAbsolutePath());\n            }\n        }\n    }\n}\n// Call with: listFilesRecursive(new File("."));',
    hint: "Recursive method for nested directories",
  },

  // FILE STREAMS AND ADVANCED (5)
  {
    id: "file_19",
    topicId: "file",
    question: "Copy file using FileInputStream and FileOutputStream.",
    mathSolution: "Read from source, write to destination",
    codeSolution:
      'try {\n    FileInputStream fis = new FileInputStream("source.txt");\n    FileOutputStream fos = new FileOutputStream("copy.txt");\n    int b;\n    while((b = fis.read()) != -1) {\n        fos.write(b);\n    }\n    fis.close();\n    fos.close();\n    System.out.println("File copied");\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Read and write byte by byte",
  },
  {
    id: "file_20",
    topicId: "file",
    question: "Copy large file using buffer for performance.",
    mathSolution: "Use buffered streams",
    codeSolution:
      'try {\n    BufferedInputStream bis = new BufferedInputStream(new FileInputStream("large.zip"));\n    BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("large_copy.zip"));\n    byte[] buffer = new byte[4096];\n    int bytesRead;\n    while((bytesRead = bis.read(buffer)) != -1) {\n        bos.write(buffer, 0, bytesRead);\n    }\n    bis.close();\n    bos.close();\n    System.out.println("Large file copied");\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Use buffer array for efficiency",
  },
  {
    id: "file_21",
    topicId: "file",
    question: "Read file using try-with-resources.",
    mathSolution: "Automatic resource management",
    codeSolution:
      'try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) {\n    String line;\n    while((line = br.readLine()) != null) {\n        System.out.println(line);\n    }\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Resources in try() close automatically",
  },
  {
    id: "file_22",
    topicId: "file",
    question: "Read file using Files class (Java NIO).",
    mathSolution: "Files class utility methods",
    codeSolution:
      'import java.nio.file.*;\ntry {\n    Path path = Paths.get("input.txt");\n    List<String> lines = Files.readAllLines(path);\n    for(String line : lines) {\n        System.out.println(line);\n    }\n    \n    // Read all bytes\n    byte[] data = Files.readAllBytes(path);\n    System.out.println("File size: " + data.length);\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Files.readAllLines() reads all lines",
  },
  {
    id: "file_23",
    topicId: "file",
    question: "Write using Files class (Java NIO).",
    mathSolution: "Files.write() for simple writing",
    codeSolution:
      'import java.nio.file.*;\nimport java.util.*;\ntry {\n    Path path = Paths.get("nio_output.txt");\n    List<String> lines = Arrays.asList("Line 1", "Line 2", "Line 3");\n    Files.write(path, lines);\n    System.out.println("Written using NIO");\n    \n    // Append more\n    Files.write(path, "\\nAppended line".getBytes(), StandardOpenOption.APPEND);\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Files.write() with options",
  },

  // FILE PERMISSIONS AND ATTRIBUTES (2)
  {
    id: "file_24",
    topicId: "file",
    question: "Set file permissions (read, write, execute).",
    mathSolution: "Use setReadable(), setWritable(), setExecutable()",
    codeSolution:
      'File file = new File("script.sh");\nif(file.exists()) {\n    file.setReadable(true);\n    file.setWritable(true);\n    file.setExecutable(true);\n    System.out.println("Permissions set: rwx");\n    \n    // Check permissions\n    System.out.println("Read: " + file.canRead());\n    System.out.println("Write: " + file.canWrite());\n    System.out.println("Exec: " + file.canExecute());\n}',
    hint: "Set permissions with boolean flags",
  },
  {
    id: "file_25",
    topicId: "file",
    question: "Get file last modified time and set new time.",
    mathSolution: "Use lastModified() and setLastModified()",
    codeSolution:
      'File file = new File("test.txt");\nif(file.exists()) {\n    long lastModified = file.lastModified();\n    java.util.Date date = new java.util.Date(lastModified);\n    System.out.println("Last modified: " + date);\n    \n    // Set to current time\n    boolean success = file.setLastModified(System.currentTimeMillis());\n    if(success) {\n        System.out.println("Modified time updated");\n    }\n}',
    hint: "lastModified returns timestamp in milliseconds",
  },
);
