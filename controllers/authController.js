import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";


export const signUp = catchAsync(async (req, res, next) => {

    const newUser = await User.create({
        name: req.body.name,
        last: req.body.last,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    })
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })


    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    })
})

export const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    
    // 1) Verificar que se envíen email y password
    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400))
    }

    const user = await User.findOne({ email }).select('+password');
    console.log(user)
    
    // if (!user || !(await user.correctPassword(password, user.password))) {
    //     return next(new AppError('Incorrect email or password', 401))
    // }

    const token = "";
    res.status(200).json({
        status:"success",
        token
    });
})