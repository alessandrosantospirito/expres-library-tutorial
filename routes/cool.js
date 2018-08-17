var express = require("express");
var router = express.Router();

router.get("/cool", function(req, res) {
  res.send("You are so cool.");
});

module.exports = router;
