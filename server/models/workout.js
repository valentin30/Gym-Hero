const { model, Schema } = require('mongoose')

const workoutSchema = mongoose.Schema({
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
            exercise: {
                type: Schema.Types.ObjectId,
                ref: 'Exercise',
                required: true,
            },
            sets:{
                type: Number,
                required: true,
            },
            reps: {
                type: Number,
                required: true,
            }
        },
    ],
})

module.exports = model('Workout', workoutSchema)