const router = require("express").Router();

// const db = require("../models");

// Register a new user
router.post("/signup", (req, res) => {
    console.log(req.body);
    res.json("registered!");
});

// Login a user
router.post("/login", (req, res) => {

});

// Route for logging out
router.get("/logout", (req, res) => {

});

module.exports = router;



