const controller = require("../controllers/joke");

module.exports = function (app) {
    app.get('/joke', controller.getRandomJoke);
};
