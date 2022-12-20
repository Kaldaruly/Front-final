const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
}, {
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
}) 

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: '7d'})

    return token
}


const User = mongoose.model('user', userSchema)

const validate = data => {
    const schema = joi.object({
        username: joi.string().required().label('Your username'),
        email: joi.string().email().required().label('Your email'),
        password: passwordComplexity().required().label('Your password'),
    })

    return schema.validate(data)
}

module.exports = { User, validate }
