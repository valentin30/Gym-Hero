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
    startingWeight: {
        type: Number,
        default: 0,
    },
    weight: {
        type: Number,
        default: 0,
    },
    goalWeight: {
        type: Number,
        default: 0,
    },
    goal: {
        type: String,
        default: 'Maintain weight',
    },
    dateOfBirth: {
        type: String,
        default: new Date().toJSON().slice(0, 10).replace(),
    },
    workouts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Workout',
            required: true,
        },
    ],
})

module.exports = model('User', userSchema)