import Post from "../models/postModel.js"

export const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find()
        res.status(200).json({
            status: "success",
            data: allPosts
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: error
        })
    }
}

export const getPostDetail = async (req, res) => {
    try {
        const postById = await Post.findById(req.params.id).populate('user', "name last email")
        res.status(200).json({
            status: "Success",
            message: "El post ha sido encontrado",
            data: postById
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
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

export const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            res.status(404).json({
                status: "fail",
                message: "No se ha encontrado el post para eliminar"
            })
        }

        res.status(200).json({
            status: "Success",
            message: "El post ha sido eliminado"
        })
    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: error.message
        })
    }
}