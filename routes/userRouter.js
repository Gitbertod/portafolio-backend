import express from 'express'
import { deleteUser, getAllUsers, createUser } from '../controllers/userController.js'

const router = express.Router()

router.route('/').get(getAllUsers)
router.route('/').post(createUser)
router.route('/:id').delete(deleteUser)


export default router;