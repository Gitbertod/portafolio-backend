import express from 'express'
import { deleteUser, getAllUsers, createUser, editUser, getUserDetail } from '../controllers/userController.js'
import { login, signUp } from '../controllers/authController.js'

const router = express.Router()

//Auth routes
router.route('/signup').post(signUp)
router.route('/login').post(login)

router.route('/').get(getAllUsers)
router.route('/').post(createUser)
router.route('/:id').delete(deleteUser).patch(editUser).get(getUserDetail)



export default router;