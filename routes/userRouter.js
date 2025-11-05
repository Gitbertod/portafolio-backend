import express from 'express'
import { getAllUsers } from '../controllers/userController.js'
import { createUser } from '../controllers/userController.js'
const router = express.Router()

router.route('/').get(getAllUsers)
router.route('/').post(createUser)

export default router;