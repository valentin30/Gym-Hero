const { model, Schema } = require('mongoose')

const exerciseSchema = Schema({
    name: {
        type: String,
        require: true,
    },
    muscles: {
        type: Array,
        require: true,
    },
    imageUrl: {
        type: String,
        default: 'http://localhost:3000/images/exercise.jpg',
    },
})

module.exports = model('Exercise', exerciseSchema)
