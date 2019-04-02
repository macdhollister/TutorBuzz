const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwtConfig.js").secret;

// Models
const db = require("../models");

// Controllers
const registerUser = require("../controllers").registerUser;
// const loginUser = require("../controllers").loginUser;

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
        registerUser(name, email, password, isTutor, loc => {res.redirect(loc)})
    }
});

// Log in a user
router.post("/login", (req, res, next) => {
    console.log(req.body);
    const { isTutor } = req.body;
    console.log("authRoutes isTutor: " + isTutor)
    const strategy = isTutor ? "login-tutor" : "login-student";
    const dbModel = isTutor ? db.Tutor : db.Student;

    // res.json(req.body)
    console.log("strategy: " + strategy);

    passport.authenticate(strategy, (err, user, info) => {
        if (err) console.log(err);
        if (info) {
            console.log(info.message);
            res.send(info.message);
        } else {
            req.logIn(user, err => {
                dbModel.findOne({
                    where: {
                        email: user.email
                    }
                }).then(user => {
                    console.log("Secret: " + jwtSecret);
                    console.log(user.email);
                    const token = jwt.sign({ id: user.email }, jwtSecret);
                    res.status(200).send({
                        auth: true,
                        token: token,
                        message: "user found and logged in"
                    })
                })
            })
        }
    })(req, res, next);
});

// Log out
router.get("/logout", (req, res) => {
    res.json("placeholder for GET /logout");
    // logout function
});

module.exports = router;