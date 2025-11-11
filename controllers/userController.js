import User from "../models/userModel.js"
import { catchAsync } from "../utils/catchAsync.js"

export const getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find()
    res.status(200).json({
        status: "success",
        data: users
    })
})

export const getUserDetail = catchAsync(async (req, res, next) => {

    const user = await User.findById(req.params.id)
    res.status(200).json({
        status: "Success",
        data: user
    })
})

export const createUser = catchAsync(async (req, res,next) => {

    const user = await User.create(req.body);
    res.status(200).json({
        status: "Success!",
        message: "User has been created",
        data: user

    })
})

export const deleteUser = catchAsync(async (req, res,next) => {

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: "Success",
        message: "User has been deleted"
    })
})

export const editUser = catchAsync(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        status: "Success",
        message: "User has been edited",
        data: user
    })
})
