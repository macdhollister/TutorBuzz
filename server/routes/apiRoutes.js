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
        db.Tutor.findByPk(req.params.tutorId).then(tutor => {
            res.json(tutor.dataValues);
        })
    }
)

router.get("/tutorData/:tutorId/sessions", 
    (req, res) => {
        db.Session.findAll({
            where: {
                tutorId: req.params.tutorId
            }
        }).then(sessions => {
            res.json(sessions);
        })
    }
)

router.post("/newSession",
    (req, res) => {
        // console.log(req.body);
        // res.json(req.body);

        const sessData = req.body;
        const toCreate = {
            startTime: `${sessData.startHr}:${sessData.startMin} ${sessData.startAmPm}`,
            endTime: `${sessData.endHr}:${sessData.endMin} ${sessData.endAmPm}`,
            day: sessData.Date,
            location: sessData.Location,
            studentId: parseInt(sessData.studentId),
            tutorId: parseInt(sessData.tutorId)
        }
        console.log(toCreate)

        db.Session.create(toCreate).then(session => res.redirect("/tutorProfile/" + req.body.tutorId));
    }
)

router.get("/sessions",
(req, res) => {
    res.json([]);
}) 

router.get("/session",
(req, res) => {
    res.json([]);
}) 

module.exports = router;
