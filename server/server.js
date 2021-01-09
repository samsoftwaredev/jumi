const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("public"));

app.get("/rosary", function (req, res) {
  res.send("rosario");
});

app.get("/grups", function (req, res) {
  res.send("grupos");
});

app.listen(port, function () {
  console.log(`App listening at http://localhost:${port}`);
});
