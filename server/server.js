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

const server = app.listen(port, function () {
  const host = server.address().address;
  console.log("Example app listening at http://%s:%s", host, port);
});
