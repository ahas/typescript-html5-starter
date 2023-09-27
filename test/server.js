const express = require("express");
const { resolve } = require("path");

const app = express();
app.use(express.static(__dirname + "/static"));

app.get("/dist/*", (req, res) => {
  res.sendFile(resolve(__dirname, "../dist", req.params[0]));
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.listen(3000);
