// Requires express node module
var express = require("express");

// Creates express app
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Declares route files for the server to use to respond to client requests
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts server listening on specified port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});