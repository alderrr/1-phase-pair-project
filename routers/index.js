const Controller = require("../controllers/controller")
const router = require("express").Router()

router.get("/", Controller.showHome)
// router.get("/signup", Controller.)
// router.get("/login", Controller.)
// router.get("/logout", Controller.)
// router.get("/profile", Controller.)
// router.get("/game/:id", Controller.)
// router.get("/game/:id/buy", Controller.)

module.exports = router