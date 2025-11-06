import Post from "../models/postModel.js"

export const getAllPosts = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: "Aqui los posts!"
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: error
        })
    }
}

export const createPost = async (req, res) => {
    try {
        console.log(req.body)

        const newPost = await Post.create({
            user: req.body.user,
            title: req.body.title,
            body: req.body.body,
        })
        res.status(200).json({
            status: "Success",
            message: "Post has been created",
            data: newPost
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}