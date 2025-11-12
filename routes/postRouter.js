import express from 'express'
import { createPost, deletePost, getAllPosts, getPostDetail } from '../controllers/postController.js'
import {protect} from "../controllers/authController.js"
const router = express.Router()


router.route('/').get(getAllPosts)
router.route("/").post(protect,createPost)
router.route("/:id").delete(deletePost).get(getPostDetail)


export default  router