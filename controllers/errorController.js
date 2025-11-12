import { AppError } from "../utils/AppError.js";

const handleCastErrorDB = err =>{
    const message = `Invalido: ${err.path}: ${err.value}`
    return new AppError(message, 400)
}

export const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if(err.name === "CastError") err = handleCastErrorDB(err)

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
    
};