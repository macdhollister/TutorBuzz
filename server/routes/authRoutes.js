const express = require("express");
const router = express.Router();
const passport = require("passport");

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
    
    if (!errors.length) {
        registerUser(name, email, password, isTutor, loc => res.redirect(loc));
    } else {
        res.redirect("/")
    }
});

router.post("/login",
    passport.authenticate("local"),
    (req, res) => {
        if (req.user && req.user.isTutor) {
            res.redirect("/tutorPortal")
        } else if (req.user) {
            res.redirect("/studentPortal")
        }
    }
);

// Log out
router.get("/logout", (req, res) => {
});

module.exports = router;