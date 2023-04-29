const routes = require("express").Router();

const myController2 = require("../controllers")

routes.get("/professional", myController2.getAPI );

module.exports = routes;