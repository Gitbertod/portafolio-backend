import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,"El post debe pertenecer a un usuario"]
    },
    title:{
        type:String,
        required:[true,"Escriba un titulo"]
    },
    body:{
        type:String,
        required:[true,"Ingrese un texto al post" ]
    }
},{timestamps:true})

export default mongoose.model('Post',postSchema)