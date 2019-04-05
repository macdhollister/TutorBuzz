const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// Load Models
const db = require("../models");

module.exports = function(passport) {
    passport.use("local", new LocalStrategy({
        usernameField: "email"
    },
        (email, password, done) => {
            // Match User
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                // Email not found
                if (!user) {
                    return done(null, false, {message: "Email not registered"});
                }

                // Match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) { throw err; }

                    if (isMatch) {
                        console.log("user is tutor? " + user.isTutor);
                        console.log(typeof user.isTutor)
                        const studOrTutor = user.isTutor ? db.Tutor : db.Student;
                        const idField = user.isTutor ? user.tutorId : user.studentId;

                        // sends the db.User found as req.user
                        return done(null, user);


                        // studOrTutor.findByPk(idField).then(user => {
                        //     return done(null, user);
                        // })
                    } else {
                        return done(null, false, {message: "Incorrect Password"});
                    }
                });
            }).catch(err => console.log(err));
        }
    ));

    passport.serializeUser((user, done) => {
        console.log("serializing user...")
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        console.log("deserializing user...")
        db.User.findByPk(id)
            .then(user => {
                done(null, user);
            })
            .catch(done);
    });
};