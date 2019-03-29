const router = require("express").Router();
// Requiring our models
const router = require("../models");

module.exports = function (app) {

  // GET route for getting all the fields from student
  // Renedered data to the homepage.
  app.get("/", function (req, res) {
    db.student.findAll({
      raw: true,
      include: [{
        model: db.student,
        attributes:['id','name']
      }]
    }).then(function (user) {
      res.render("homePage", { data: student });
    });
  })

  // GET route for getting all the datas from student & tutor
  // Happens when on personal dashboard.
  app.get("/homePage", function (req, res) {
    db.tutor.findAll({
      raw: true,
      include: [{
        model: db.tutor,
        attributes:['id','name']
      }]
    }).then(function (tutor) {
      res.render("homePage", { data: tutor });
    });
  })

  // GET route for getting all the datas from both postItem & user table filtered with category.
  app.get("/api/homePage/:category", function (req, res) {
    db.session.findAll({
      where: {
        category: req.params.category
      },
      raw: true,
      include: [{
        model: db.session,
        attributes:['id','name']
      }]
    }).then(function (session) {
      res.render("homePage", { data: session });
    });
  })

  // Create user record only if it doesn't exist.
  app.post("/api/users", function (req, res) {
    db.user.findOrCreate(
      {
      where: req.body,
      attributes:['id','name']
    })
      .then(function (user) {
        res.json(user);
      });
  });
};


