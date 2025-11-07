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

export const getUserDetail = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({
            status: "Success",
            data: user
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(200).json({
            status: "Success!",
            message: "User has been created",
            data: user

        })
    } catch (error) {
        data: error
    }
}

export const deleteUser = async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "Success",
            message: "User has been deleted"
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error
        })
    }

}

export const editUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    try {
        res.status(200).json({
            status: "Success",
            message: "User has been edited",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail"
        })
    }
}
