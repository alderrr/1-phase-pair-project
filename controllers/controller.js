const { Game, User, Profile } = require("../models")
const bcrypt = require("bcryptjs")

class Controller {
    static showRegister(_, res) {
        res.render("registerForm")
    }
    static postRegister(req, res) {
        const {username, password, role} = req.body
        User.create({username, password, role})
        .then((newUser) => {
            const userId = newUser.id
            res.redirect(`/register/profile?id=${userId}`)
        })
        .catch((err) => {
            res.send(err)
        })
    }
    static showCreateProfile(req, res) {
        // res.send(req.params)
        const userId = req.params.id
        User.findByPk(userId)
        .then((userId) => {
            res.render("profileForm", {userId})
        })
        .catch((err) => {
            res.send(err)
        })
    }
    static postCreateProfile(req, res) {
        const {nickname, picture, balance, UserId} = req.body
        Profile.create({nickname, picture, balance, UserId})
        .then((newProfile) => { //! periksa perlu atau tidak
            res.redirect("/login")
        })
        .catch((err) => {
            res.send(err.message)
        })
    }
    static showLogin(req, res) {
        const { error } = req.query
        res.render("loginForm", { error })
    }
    static postLogin(req, res) {
        const {username, password} = req.body
        User.findOne({where:{username}}) //! cari user ada atau tidak
        .then((user) => {
            if (user) { // cek user
                const isValid = bcrypt.compareSync(password, user.password)
                if (isValid) { //! cek password
                    req.session.UserId = user.id //? req.session.bebasNamanya, ini untuk pengecekan user sedang login atau tidak
                    return res.redirect("/") // kalau username dan password benar
                } else {
                    const error = "Invalid username/password" 
                    return res.redirect(`/login?error=${error}`) //! kalau password salah
                }
            } else {
                const error = "Invalid username/password" 
                return res.redirect(`/login?error=${error}`) //! kalau username salah
            }
        })
        .catch((err) => {
            res.send(err)
        })
    }
    static showHome(req, res) {
        Game.findAll()
        .then((games) => {
            res.render("showGames", {games})
        })
        .catch((err) => {
            res.send(err.message)
        })
    }
    static showProfile(req, res) {
        Profile.findAll()
        .then((profiles) => {
            res.render("showProfile", {profiles})
        })
        .catch((err) => {
            res.send(err.message)
        })
    }
    static postLogout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/login")
            }
        })
    }
}

module.exports = Controller