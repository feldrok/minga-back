import express from "express"
const router = express.Router()
import users from "./users.route.js"
import categories from "./categories.route.js"

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send('minga server ready')
})

router.use("/users", users)
router.use("/categories", categories)

export default router