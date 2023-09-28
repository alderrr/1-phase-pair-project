const session = require("express-session")
const express = require("express")
const app = express()
const port = 3000
const router = require("./routers")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'keyboard cat', // harus ada, bebas
    resave: false,
    saveUninitialized: false, // reduce server storage usage
    cookie: {
        secure: false, // secure untuk https //? development bisa false
        sameSite: true //! untuk security dari csrf attack
    }
}))

app.use(router)

app.listen(port, () => {
    console.log(`I love you ${port}`);
})