export const getAllUsers = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: "usuarios de la DB"
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: error
        })
    }
}