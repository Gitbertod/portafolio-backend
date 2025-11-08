import User from "../models/userModel.js"
const jwt = require('jsonwebtoken')


export const signUp = async (req, res) => {
    const newUser = await User.create({
        name: req.body.name
    })
}