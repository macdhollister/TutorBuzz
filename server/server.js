const express = require("express");
const app = express();
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const httpServer = require("http").Server(app);
const path = require("path");

// Passport config
const passport = require("passport");
require("./config/passport")(passport);

// DB Config
const db = require("./models");

// Bodyparsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express Sessions
app.use(session({
    secret: "Tutorbuzz is awesome!",
    resave: true,
    saveUninitialized: true
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Global Vars
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
})

// Routes
app.use(require("./routes/authRoutes"));
app.use(require("./routes/apiRoutes"));

const clientFolder = path.join(__dirname, "../client/build")
console.log("serving assets from client folder: " + clientFolder);
app.use(express.static(clientFolder));

app.get("/*", (req, res) => {
    res.sendFile(path.join(clientFolder, "index.html"))
})

db.sequelize.sync().then(() => {
    httpServer.listen(PORT, console.log(`Server listening on PORT ${PORT}`));
});