require('dotenv').config()

const express = require("express")
const app = express()
const routes = require("./routes")
const port = 3000

app.use("/assets", express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/", routes)

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})