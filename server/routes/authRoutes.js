const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");

// Models
const db = require("../models");

// Controllers
const registerUser = require("../controllers").registerUser;

// Sign up a new user
router.post("/signup", (req, res) => {
    const { name, email, password, password2 } = req.body;
    const isTutor = JSON.parse(req.body.isTutor);

    const errors = [];

    if (!(name && email && password && password2 && isTutor)) {
        errors.push({message: "Please fill in all fields"});
    }

    if (password !== password2) {
        errors.push({message: "Passwords do not match"});
    }

    if (errors.length !== 0) {
        res.redirect("/");
    } else {
        // create new user
        registerUser(email, password, loc => {res.redirect(loc)})
    }
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