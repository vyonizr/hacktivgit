const router = require("express").Router()
const UserController = require("../../controller/userController")

router.get("/", UserController.getProfile)
router.get("/repos", UserController.getAllRepos)
router.post("/repos", UserController.createARepo)
router.get("/repos/user/:username", UserController.findSomeonesRepos)
router.get("/repos/starred", UserController.getStarredRepos)
router.get("/repos/starred/search", UserController.searchStarredRepos)
router.put("/repos/starred/:owner/:repo", UserController.starARepo)
router.delete("/repos/starred/:owner/:repo", UserController.unstarARepo)

module.exports = router
