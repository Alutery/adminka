const express = require("express");
const path = require("path");
const gamesRouter = require("./routes/games");
const mainRouter = require("./routes/main");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(gamesRouter);
app.use(mainRouter);

app.listen(PORT, () => {
  console.log("Сервер запущен на http://localhost:" + PORT);
});
