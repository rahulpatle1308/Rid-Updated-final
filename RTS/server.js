// const express = require("express");
// const session = require("express-session");
// const path = require("path");
// const connectDB = require("./config/db");
// require("dotenv").config();

// const app = express();

// // Database
// connectDB();

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));


// // Session
// app.use(
//   session({
//     name: "rts.sid",
//     secret: process.env.SESSION_SECRET || "rid_session_secret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: process.env.NODE_ENV === "production",
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000,
//       sameSite: "lax",
//     },
//   })
// );

// // View Engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Home
// app.get("/", (req, res) => {
//   if (req.session.userId) return res.redirect("/dashboard");
//   res.redirect("/login");
// });

// // Routes
// app.use("/", require("./routes/auth.routes"));
// app.use("/", require("./routes/dashboard.routes"));
// app.use("/", require("./routes/quiz.routes"));
// app.use("/", require("./routes/result.routes"));
// app.use("/", require("./routes/test.routes"));
// app.use("/", require("./routes/certificate.routes"));
// // Add this with other routes
// app.use('/', require('./routes/profile.routes'));
// app.use("/api", require("./routes/visit.routes"));


// // Health
// app.get("/health", (req, res) => {
//   const mongoose = require("mongoose");
//   const dbStatus = mongoose.connection.readyState;

//   res.json({
//     status: dbStatus === 1 ? "healthy" : "unhealthy",
//     database: dbStatus === 1 ? "connected" : "disconnected",
//   });
// });

// // 404
// app.use((req, res) => {
//   res.status(404).render("404");
// });

// // Error
// app.use((err, req, res, next) => {
//   console.error("🔥 Server Error:", err.stack);
//   res.status(500).render("error", {
//     title: "Server Error",
//     message: "Something went wrong",
//   });
// });


// app.use((req, res, next) => {
//   res.locals.sidebar = true;   // default for all views
//   next();
// });



// // ✅ SERVER START FIRST
// const PORT = process.env.PORT || 9191;
// const server = app.listen(PORT, () => {
//   console.log(`\n📡 Server running at: http://localhost:${PORT}`);
// });


// // ✅ SOCKET.IO AFTER SERVER
// const { Server } = require("socket.io");
// const io = new Server(server);

// let onlineUsers = 0;

// io.on("connection", (socket) => {
//   onlineUsers++;
//   io.emit("onlineUsers", onlineUsers);

//   socket.on("disconnect", () => {
//     onlineUsers--;
//     io.emit("onlineUsers", onlineUsers);
//   });
// });
