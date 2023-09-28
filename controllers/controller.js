const { Game, User, Profile } = require("../models")

class Controller {
    static showHome(req, res) {
        Game.findAll()
        .then((games) => {
            res.send(games)
            res.render("showHome", {games})
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = Controller