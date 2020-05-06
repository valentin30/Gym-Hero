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
            exercise:{
                type:Object,
                required: true,
                work:[
                    {
                        sets:{
                            type:Number,
                            required: true,
                        },
                        reps:{
                            type:Number,
                            required: true,
                        },
                        weight:{
                            type:Number,
                            required: true,
                        },
                    },
                ]
            }
        },
    ],
})

module.exports = model('Workout', workoutSchema)