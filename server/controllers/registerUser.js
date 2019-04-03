const bcrypt = require("bcryptjs");
const db = require("../models");

module.exports = function registerUser(name, email, password, isTutor, cb) {
    const studOrTutor = isTutor ? db.Tutor : db.Student;

    studOrTutor.findOne({
        where: {
            email: email
        }
    }).then(response => {
        if (response) {
            // user exists
            return cb("/")
        }

        studOrTutor.create({
            name: name,
            email: email,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        }).then(() => {
            cb("/login");
        })
    })
}