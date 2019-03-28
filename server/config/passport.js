const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// Load User Model
const User = require("../models").User;

module.exports = function(passport) {
    passport.use(new LocalStrategy(
        (email, password, done) => {
            // Match User
            User.findOne({
                where: {
                    email: email
                }
            })
            .then(user => {
                // Username not found
                if (!user) {
                    return done(null, false, {message: "Username not found"});
                }

                // Match Password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) { throw err; }

                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: "Incorrect Password"});
                    }
                })
            })
            .catch(err => {
                console.log(err);
            });
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then(user => {
                done(null, user);
            })
            .catch(done);
    });
}