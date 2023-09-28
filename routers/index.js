const Controller = require("../controllers/controller")
const router = require("express").Router()

const isLoggedIn = function(req, res, next) {
    console.log(req.session);
    if (!req.session.UserId) {
        const error = "Please login first!"
        res.redirect(`/login?error=${error}`)
    } else {
        next()
    }
}

router.get("/register", Controller.showRegister)
router.post("/register", Controller.postRegister)

router.get("/register/profile", Controller.showCreateProfile)
router.post("/register/profile", Controller.postCreateProfile)

router.get("/login", Controller.showLogin)
router.post("/login", Controller.postLogin)

router.use(isLoggedIn)

// router.get("/logout", Controller.)
router.get("/", Controller.showHome)
// router.get("/profile", Controller.)
// router.get("/game/:id", Controller.)
// router.get("/game/:id/buy", Controller.)

router.get("/logout", Controller.postLogout)

module.exports = router