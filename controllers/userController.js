import User from "../models/userModel.js"

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            status: "success",
            data: users
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: error
        })
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(200).json({
            status: "Success!",
            message:"User has been created",
            data: user

        })
    } catch (error) {
        data: error.m
    }
}