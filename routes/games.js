const gamesRouter = require("express").Router();

const getAllGames = async (res, req) => {};

gamesRouter.get("/games", getAllGames);

const deleteGame = (req, res) => {};

gamesRouter.delete("/games/:id", deleteGame);

const addGame = (req, res) => {};

gamesRouter.post(addGame);

module.exports = gamesRouter;
