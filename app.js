import express from "express"
import path from "path"
import indexRouter from "./routes/index.js"
import "dotenv/config.js"
import "./config/db.js"

// import middlewares
import logger from "morgan"
import cors from "cors"
import error404 from "./middlewares/error404.middleware.js"

import { __dirname } from "./utils.js"

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// third party middlewares
app.use(logger("dev")) // morgan
app.use(cors()) // cors
app.use(express.json()) // body-parser
app.use(express.urlencoded({ extended: false })) // body-parser
app.use(express.static(path.join(__dirname, "public"))) // serve static files

app.use("/", indexRouter)

// handle route errors
app.use(error404)


export default app
