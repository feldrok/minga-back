import express from "express"
const router = express.Router()
import controller from "../controllers/users.controller.js"

const { read, one, create, update, destroy } = controller

// POST create a user
router.post("/" , create)

// GET all users
router.get("/" , read)

// GET one user
router.get("/:user_id" , one)

// PUT update a user
router.put("/:user_id" , update)

// DELETE delete a user
router.delete("/:user_id" , destroy)

export default router

// router.get al enrrutador le informo que tiene que hacer una peticion de tipo GET
// '/' es la ruta que tiene que escuchar