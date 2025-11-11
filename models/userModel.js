import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from "validator"


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [15],
        minlength: [3]
    },
    last: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: [true, "El usuario debe tener email"],
        validate: [validator.isEmail, "Ingrese un email valido "]
    },
    picture: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'Por favor ingresa un password'],
        select: false,
        minlength: 4
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Por favor ingresa un password'],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'Password are not the same!'
        },

        select: false
    }
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
})

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

export default mongoose.model('User', userSchema)