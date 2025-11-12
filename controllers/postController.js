import Post from "../models/postModel.js"
import { AppError } from "../utils/AppError.js"
import { catchAsync } from "../utils/catchAsync.js"

export const getAllPosts = catchAsync(async (req, res) => {

    const allPosts = await Post.find()
    res.status(200).json({
        status: "success",
        data: allPosts
    })

})

export const getPostDetail = catchAsync(async (req, res, next) => {
    const postById = await Post.findById(req.params.id).populate('user', "name last email")

    if (!postById) {
        return next(new AppError('No se encontro el post con ese ID', 404))
    }

    res.status(200).json({
        status: "Success",
        message: "El post ha sido encontrado",
        data: postById
    })
})

export const createPost = catchAsync(async (req, res) => {

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

})

export const deletePost = catchAsync(async (req, res) => {

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

})