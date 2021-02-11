const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const path = require("path");
const port = 3000;
require('dotenv').config()

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "public", "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// this will import all of the static files like css and js files
app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// index page
app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/rosario", function (req, res) {
  res.render("rosary.ejs");
});

app.get("/grupos", function (req, res) {
  res.render("groups.ejs");
});

app.listen(port, function () {
  console.log(`App listening at http://localhost:${port}`);
});
