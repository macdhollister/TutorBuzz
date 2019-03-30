const router = require("express").Router();



// const db = require("../models");

//profile just leave to quotes when we have data from user auth
router.get("/profile", (req, res) => {

    //replace this with the actual data when we have the user auth setup
    res.json({name: "Josie"})
});

//route to track sessions 
router.get("/sessions", (req, res) => {
    //replace this with the actual data when we have the user auth setup
    res.json({date: "Wednesday 1:00pm"})
})

// POST method route
router.post('/profile', function (req, res) {
    res.send('POST request to the homepage')
  })


//this is where we will post into the specific components for each of the student/tutor profile page
  router.post('/sessions', function (req, res) {
    res.send('POST request to the homepage')
  })

=======
    res.json({name: "Josie"})
});

//route to get sessions
router.get("/sessions", (req, res) => {
    res.json({date: "Wednesday 1:00pm"})
})




module.exports = router;





