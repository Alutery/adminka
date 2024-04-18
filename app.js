const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readFile("./public/index.html", "utf-8").then((data) => {
    res.header("Content-Type", "text/html");
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log("Сервер запущен на http://localhost:" + PORT);
});
