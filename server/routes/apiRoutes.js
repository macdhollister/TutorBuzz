const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isAuthenticated } = require("../config/middleware/isAuthenticated");

// Models
const db = require("../models");

// Get data for authenticated tutor
router.get("/selfDataTutor",
    isAuthenticated,
    (req, res, next) => {
        if (!req.user) res.redirect("/login");

        const user = req.user.dataValues;
        if (!user.isTutor) res.redirect("/studentPortal");

        db.Tutor.findByPk(user.tutorId).then(tutor => {
            console.log(tutor.dataValues);
            res.json(tutor.dataValues);
        })
    }
)

// Get data for authenticated student
router.get("/selfDataStudent", 
    passport.authenticate("local"),
    (req, res, next) => {

    }
)

module.exports = router;





