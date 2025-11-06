import express from 'express'
import { deleteUser, getAllUsers, createUser, editUser } from '../controllers/userController.js'

const router = express.Router()

router.route('/').get(getAllUsers)
router.route('/').post(createUser)
router.route('/:id').delete(deleteUser).patch(editUser)



export default router;