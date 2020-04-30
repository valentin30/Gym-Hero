const { model, Schema } = require('mongoose')

const workoutSchema = Schema({
    date: {
        type: Date,
        default: new Date().toJSON().slice(0, 10).replace(),
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    exercises: [
        {
            name: {
                type: String,
                required: true,
            },
            sets:{
                type: Number,
                required: true,
            },
            reps: {
                type: Number,
                required: true,
            },
            weight:{
                type: Number,
                required: true,
            }
        },
    ],
})

module.exports = model('Workout', workoutSchema)