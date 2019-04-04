const bcrypt = require("bcryptjs");
const db = require("../models");

module.exports = function registerUser(name, email, password, isTutor, cb) {
    isTutor = JSON.parse(isTutor);
    const studOrTutor = isTutor ? db.Tutor : db.Student;

    db.User.findOne({
        where: {
            email: email
        }
    }).then(response => {
        if (response) {
            // user exists
            return cb("/")
            // res.json("user already exists");
        }

        const newUser = {
            email: email,
            name: name
        }

        studOrTutor.create(newUser).then(newUser => {
            const info = {
                email: email,
                password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
                isTutor: isTutor
            }

            if (isTutor) {
                info["tutorId"] = newUser.id
            } else {
                info["studentId"] = newUser.id
            }

            db.User.create(info).then(() => cb("/login"))
            // db.User.create(info).then(() => console.log("created!"));
        })
    })
}