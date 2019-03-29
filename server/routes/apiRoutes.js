const router = require("express").Router();



// const db = require("../models");

//profile
router.get("/profile", (req, res) => {
    res.json({name: "Josie"})
});



module.exports = router;





