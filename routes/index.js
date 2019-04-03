const router = require("express").Router()
const APIRoute = require("./api")

router.use("/api", APIRoute)

module.exports = router

/*
http://localhost:3000/api/repos/starred
http://localhost:3000/api/repos/starred
*/