// requires express
var express = require("express");

var router = express.Router();

// imports the model from burgers.js to use its functiong
var Burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  Burger.all(function(data) {
    var hbsObject = {
      Burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/Burgers", function(req, res) {
  Burger.create([
    "type", "devour"
  ], [
    req.body.type, req.body.devour
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/Burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  Burger.update({
    devour: req.body.devour
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// is needed! thanks to max I was able to solve a lot of errors
module.exports = router;