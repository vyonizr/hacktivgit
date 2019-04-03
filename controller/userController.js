const axios = require("axios")

let githubAPI = axios.create({
  baseURL: "https://api.github.com"
})

githubAPI.defaults.headers.common["Authorization"] = `token ${process.env.GITHUB_TOKEN}`

class UserController {
  static getProfile(req, res) {
    githubAPI.get("/user")
    .then(response => {
      res.status(response.status).json(response.data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static getAllRepos(req, res) {
    githubAPI.get("/user/repos")
    .then(response => {
      res.status(response.status).json(response.data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static createARepo(req, res) {
    githubAPI.post("/user/repos", {
      name: req.body.name,
      description: req.body.description
    })
    .then(response => {
      res.status(response.status).json(response.data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static findSomeonesRepos(req, res) {
    githubAPI.get(`/users/${req.params.username}/repos`)
    .then(response => {
      res.status(response.status).json(response.data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static getStarredRepos(req, res) {
    githubAPI.get("/user/starred")
    .then(response => {
      res.status(response.status).json(response.data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static searchStarredRepos(req, res) {
    githubAPI.get("/user/starred")
    .then(response => {
      let regex = new RegExp(req.query.q, "gi");
      let filtered = response.data.find(starredRepo => starredRepo.name.match(regex) || starredRepo.description.match(regex) || starredRepo.full_name.match(regex))
      res.status(response.status).json(filtered)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static starARepo(req, res) {
    githubAPI.defaults.headers.common["Content-Length"] = 0
    githubAPI.put(`/user/starred/${req.params.owner}/${req.params.repo}`)
    .then(response => {
      res.status(response.status).json(response.data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static unstarARepo(req, res) {
    githubAPI.delete(`/user/starred/${req.params.owner}/${req.params.repo}`)
    .then(response => {
      res.status(response.status).json(response.data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = UserController