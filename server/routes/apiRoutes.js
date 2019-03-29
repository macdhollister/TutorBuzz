const router = require("express").Router();



// const db = require("../models");

//profile just leave to quotes when we have data from user auth
router.get("/profile", (req, res) => {
    res.json({name: "Josie"})
});

//route to get sessions
router.get("/sessions", (req, res) => {
    res.json({date: "Wednesday 1:00pm"})
})



module.exports = router;





