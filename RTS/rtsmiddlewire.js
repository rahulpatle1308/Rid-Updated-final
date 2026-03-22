const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

/* ==============================
   MIDDLEWARE
============================== */

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Static Files (RTS public folder)
app.use(express.static(path.join(__dirname, "public")));


/* ==============================
   SESSION
============================== */

app.use(
  session({
    name: "rts.sid",
    secret: process.env.SESSION_SECRET || "rid_session_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      sameSite: "lax",
    },
  })
);


/* ==============================
   VIEW ENGINE
============================== */

app.set("view engine", "ejs");

// VERY IMPORTANT → Only point to RTS/views
app.set("views", path.join(__dirname, "views"));


/* ==============================
   ROUTES
============================== */



// Dashboard
app.use("/", require("./routes/dashboard.routes"));
app.use("/", require("./routes/quiz.routes"));
app.use("/", require("./routes/result.routes"));
app.use("/", require("./routes/test.routes"));
app.use("/", require("./routes/certificate.routes"));
app.use("/", require("./routes/profile.routes"));
app.use("/api", require("./routes/visit.routes"));


// demo route
app.get("/", (req, res) => {
  res.send("RTS Home Working");
});

/* ==============================
   404 HANDLER (OPTIONAL)
============================== */

app.use((req, res) => {
  res.status(404).render("404"); // Make sure 404.ejs exists
});


module.exports = app;
