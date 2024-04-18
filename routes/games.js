const gamesRouter = require("express").Router();

const getAllGames = async (res, req) => {};

gamesRouter.get("/games", getAllGames);

module.exports = gamesRouter;
