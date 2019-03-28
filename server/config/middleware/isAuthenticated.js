// Allows for restricting routes for unauthenticated users
module.exports = {
    isAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect("/login");
    }
}