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
    const { name, email, password, password2, isTutor } = req.body;
    // const isTutor = JSON.parse(req.body.isTutor);

    const errors = [];

    if (!(name && email && password && password2 && isTutor)) {
        errors.push({message: "Please fill in all fields"});
    }

    if (password !== password2) {
        errors.push({message: "Passwords do not match"});
    }

    console.log(errors);

    if (!errors.length) {
        registerUser(name, email, password, isTutor, loc => res.redirect(loc));
    } else {
        res.redirect("/")
    }
});

// Log in a user
router.post("/login", (req, res, next) => {
});

// Log out
router.get("/logout", (req, res) => {
});

module.exports = router;