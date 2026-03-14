const express = require("express");
const router = express.Router();

/*
==============================
RESEARCH HOME PAGE
==============================
URL: /research
*/
router.get("/research", (req, res) => {
    res.render("Research-Papers/research");
});


/*
==============================
CREATE ACCOUNT PAGE
==============================
URL: /research-create
*/
router.get("/research-create", (req, res) => {
    res.render("Research-Papers/Authentication/create");
});


/*
==============================
LOGIN PAGE
==============================
URL: /research-login
*/
router.get("/research-login", (req, res) => {
    res.render("Research-Papers/Authentication/login");
});


module.exports = router;