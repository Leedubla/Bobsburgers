// requires express
var express = require("express");
// sets localhost port
var PORT = process.env.PORT || 6868;

var app = express();

// uses css and js
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// requires routes from a js file
var routes = require("./controllers/burgerController.js");

app.use(routes);

// Starts up the server so files can be viewed and used
app.listen(PORT, function() {
  // shows what port number to navigate to
  console.log("Server listening on: http://localhost:" + PORT);
});