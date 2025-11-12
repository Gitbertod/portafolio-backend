import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import { promisify } from 'util'
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

export const signUp = catchAsync(async (req, res, next) => {

    const newUser = await User.create({
        name: req.body.name,
        last: req.body.last,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    })
    const token = signToken(newUser._id);


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

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401))
    }

    const token = signToken(user._id);
    res.status(200).json({
        status: "success",
        token
    });
})

//Middleware para proteger rutas
export const protect = catchAsync(async (req, res, next) => {
    //1) obtener el token y chequearlo
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1];
    }
    

    if (!token) {
        return next(new AppError("No estas logueado, porfavor haz login para tener acceso", 401))
    }
    //2) Verificacion del token si es válido o si ya caducó
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    console.log(decoded)


    //3) Chequear si el usuario existe

    //4)validar si el usuario cambio el password despues que fue enviado el token

    next();
})