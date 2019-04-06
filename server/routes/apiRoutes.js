const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isAuthenticated } = require("../config/middleware/isAuthenticated");

// Models
const db = require("../models");

// Get data for authenticated tutor
router.get("/selfDataTutor",
    // isAuthenticated,
    (req, res) => {
        if (!req.user) res.redirect("/login");
        else {
            const user = req.user.dataValues;
            if (!user.isTutor) res.redirect("/studentPortal");
    
            db.Tutor.findByPk(user.tutorId).then(tutor => {
                console.log(tutor.dataValues);
                res.json(tutor.dataValues);
            })
        }
    }
)

// Get data for authenticated student
router.get("/selfDataStudent", 
    // isAuthenticated,
    (req, res) => {
        if (!req.user) res.redirect("/login");
        else {
            const user = req.user.dataValues;
            if (user.isTutor) res.redirect("/tutorPortal");
    
            db.Student.findByPk(user.studentId).then(student => {
                console.log(student.dataValues);
                res.json(student.dataValues);
            })
        }
    }
)

// Getting data about a specified tutor
router.get("/tutorData/:tutorId",
    // isAuthenticated,
    (req, res) => {
        // res.json({
        //     id: 1,
        //     name: "mac test",
        //     email: "blah@blah.com"
        // })

        db.Tutor.findByPk(req.params.tutorId).then(tutor => {
            res.json(tutor.dataValues);
        })
    }
)

module.exports = router;