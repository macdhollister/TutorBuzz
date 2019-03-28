const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");

// Models
// const db = require("../models");

// Sign up a new user
router.post("/signup", (req, res) => {
    res.json("placeholder for POST /signup");
    // sign up function
});

// Log in a user
router.post("/login", (req, res, next) => {
    res.json("placeholder for POST /login");
    // login function
});

// Log out
router.get("/logout", (req, res) => {
    res.json("placeholder for GET /logout");
    // logout function
});

module.exports = router;