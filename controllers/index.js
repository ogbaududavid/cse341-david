const awesomeFunction  = (req, res, next) => {
    res.json("Francisca Ogbaudu");
};

const returnAnotherPerson  = (req, res, next) => {
    res.json("Super Awesome Person");
};

module.exports = {awesomeFunction, returnAnotherPerson};