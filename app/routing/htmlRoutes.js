// Requires path node module
var path = require("path");

// Exports module to be used by server
module.exports = function(app) {

    // Returns Survey.html when /survey route is hit
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Catch all get route that returns home.html
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};