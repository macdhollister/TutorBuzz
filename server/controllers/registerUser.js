const bcrypt = require("bcryptjs");
const db = require("../models");

module.exports = function registerUser(email, password, cb) {
    db.User.findOne({
        where: {
            email: email
        }
    }).then(response => {
        if (response) {
            // user exists
            return cb("/")
        }

        db.User.create({
            email: email,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        }).then(() => {
            cb("/login");
        })
    })
}