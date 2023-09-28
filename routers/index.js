const Controller = require("../controllers/controller")
const router = require("express").Router()


router.get("/register", Controller.showRegister)
router.post("/register", Controller.postRegister)

router.get("/login", Controller.showLogin)
router.post("/login", Controller.postLogin)

router.use(function(req, res, next) {
    console.log(req.session);
    next()
})

// router.get("/logout", Controller.)
router.get("/", Controller.showHome)
// router.get("/profile", Controller.)
// router.get("/game/:id", Controller.)
// router.get("/game/:id/buy", Controller.)

module.exports = router