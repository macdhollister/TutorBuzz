const router = require("express").Router();



// const db = require("../models");

//profile just leave to quotes when we have data from user auth
router.get("/profile", (req, res) => {
    //replace this with the actual data when we have the user auth setup
    res.json({name: "Josie"})
});

//route to track sessions for tutor
router.get("tutor/:tutorId/session", (req, res) => {
    //replace this with the actual data when we have the user auth setup
    res.json({session: ""})
})

//route to track sessions for student
router.get("student/:studentId/session", (req, res) => {
    //replace this with the actual data when we have the user auth setup
    res.json({session: ""})
})

// POST method route
router.post('/profile', function (req, res) {
    res.send('POST request')
  })

//this is where we will post into the specific components for each of the student/tutor profile page
  router.post('tutor/:tutorId/sessions/', function (req, res) {
    res.send('POST request')
  })
 

module.exports = router;





