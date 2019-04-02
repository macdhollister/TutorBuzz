const jwtSecret = require("./jwtConfig").secret
const bcrypt = require("bcryptjs");

const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const db = require("../models");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

function loginStrategies(dbModel) {
    return new localStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            session: false
        },
        (email, password, done) => {
            try {
                dbModel.findOne({
                    where: {
                        email: email
                    }
                }).then(user => {
                    if (!user) {
                        return done(null, false, { message: "email not found" });
                    } else {
                        bcrypt.compare(password, user.password).then(response => {
                            if (!response) {
                                console.log("passwords do not match");
                                return done(null, false, { message: "passwords do not match" });
                            }
                            console.log("user found and authenticated");
                            return done(null, user);
                        })
                    }
                })
            } catch (err) {
                done(err);
            }
        }
    )
}

// passport.use("login-student", loginStrategies(db.Student));
passport.use("login-tutor", loginStrategies(db.Tutor));

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: jwtSecret
}

function jwtStrategies(dbModel) {
    return new JWTstrategy(opts, (jwt_payload, done) => {
        try {
            dbModel.findOne({
                where: {
                    email: jwt_payload.id
                }
            }).then(user => {
                if (user) {
                    console.log("user found in db in passport");
                    done(null, user);
                } else {
                    console.log("user not found in db");
                    done(null, false);
                }
            })
        } catch (err) {
            done(err);
        }
    })
}

// passport.use("jwt-student", jwtStrategies(db.Student));
passport.use("jwt-tutor", jwtStrategies(db.Tutor));