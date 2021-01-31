const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("public"));

app.get("/rosario", function (req, res) {
  const rosaryPath = path.join(__dirname, "..", "public/views/rosary.html");
  res.sendFile(rosaryPath);
});

app.get("/grupos", function (req, res) {
  const gruposPath = path.join(__dirname, "..", "public/views/grupos.html");
  res.sendFile(gruposPath);
});

app.listen(port, function () {
  console.log(`App listening at http://localhost:${port}`);
});
