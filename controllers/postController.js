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