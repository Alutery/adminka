const { readData } = require("../utils/data");
const gamesRouter = require("express").Router();

const getAllGames = async (res, req) => {
  const games = await readData("./data/games.json");
  if (!games) {
    // TODO: обработать ошибку
  } else {
    req.send(games);
  }
};

gamesRouter.get("/games", getAllGames);

const deleteGame = (req, res) => {};

gamesRouter.delete("/games/:id", deleteGame);

const addGame = (req, res) => {};

gamesRouter.post(addGame);

module.exports = gamesRouter;
