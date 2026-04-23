const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const fileUpload = require("express-fileupload");
const passport = require("passport");

module.exports = function (app) {

    app.use(helmet({
        contentSecurityPolicy: false
    }));

    app.use(cors());

    app.use(express.json({ limit: "50mb" }));
    app.use(express.urlencoded({ extended: true, limit: "50mb" }));

    app.use(cookieParser());

    app.use(fileUpload({
        useTempFiles: false,
        limits: { fileSize: 50 * 1024 * 1024 }
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    require("../config/passport")(passport);
};