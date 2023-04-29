const getAPI  = (req, res, next) => {
    req = require("../user.json");
    res.json(req["data"]);
};

module.exports = {getAPI};
