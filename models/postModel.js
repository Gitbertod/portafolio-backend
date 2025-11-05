import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    user:{
        type:String
    },
    title:{
        type:String,
        required:[true,"Escriba un titulo"]
    },
    body:{
        type:String,
        required:[true,"Ingrese un texto al post" ]
    }
})

export default mongoose.model('Post',postSchema)