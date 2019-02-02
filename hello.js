var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.status(302).send("Root");
})

app.get("/hello", function (req, res) {
  res.status(200).send("Hello World!");
  //res.send("Hello World!");
});

app.get("/google", function(req, res){
  res.status(302).send("Google");
})

app.get("/fail", function(req, res){
  res.status(500).send("Fehler");
})

app.listen(3000, function() {
  console.log ("Lauschen auf Port 3000.");
})
