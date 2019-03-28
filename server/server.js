const express = require("express");
const app = express();
// const session = require("express-session");
const PORT = process.env.PORT || 3001;
const httpServer = require("http").Server(app);

// Passport config
const passport = require("passport");
// require("./config/passport")(passport);

// DB Config
const db = require("./models");

// Bodyparsing
app.use(express.urlencoded({ extended: false }));

// Express Sessions
// app.use(session({
//     secret: "Tutorbuzz is awesome!",
//     resave: true,
//     saveUninitialized: true
// }));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use(authRoutes);

const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);

    // add other routes here

db.sequelize.sync().then(() => {
    httpServer.listen(PORT, console.log(`Server listening on PORT ${PORT}`));
});