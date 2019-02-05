var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.redirect("/hello");
});

app.get("/hello", function (req, res) {
  res.status(200).send("Hello World! Test");
});

app.get("/google", function(req, res){
  //Redirect auf Status 302
  res.redirect("http://www.google.de");
});

app.get("/fail", function(req, res){
  res.sendStatus(500);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log ("listen on port " + port);
});
