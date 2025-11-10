import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import { AppError } from "../utils/AppError.js";


export const signUp = async (req, res) => {

    const newUser = await User.create({
        name: req.body.name,
        last: req.body.last,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.password
    })
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })


    res.status(200).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    })
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400))
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401))
    }

}