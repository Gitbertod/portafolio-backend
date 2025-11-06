import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:[15],
        minlength:[3]
    },
    last:{
        type:String
    },
    email:{
        type:String,
        required:[true,"El usuario debe tener email"]
    },
    picture:{
        type:String
    },
    password:{
        type:String,
        required:[true,'Por favor ingresa un password']
    },
    passwordConfirm:{
        type:String,
        required:[true,'Por favor ingresa un password']
    }
},{timestamps: true})

export default mongoose.model('User',userSchema)