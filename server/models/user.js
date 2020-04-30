const { model, Schema } = require('mongoose')

const userSchema = Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        default: 'Male',
    },
    height: {
        type: Number,
        default: 0,
    },
    weight: {
        type: Number,
        default: 0,
    },
    imageUrl:{
        type:String,
        default: 'images/avatar.png'
    },
    dateOfBirth: {
        type: String,
        default: new Date().toJSON().slice(0, 10).replace(),
    },
})

module.exports = model('User', userSchema)