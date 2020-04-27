const { model, Schema } = require('mongoose')

const exerciseSchema = mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
    usedMuscles:{
        type: Array,
        require:true,
    },
    imageUrl: {
        type: String,
        default: 'http://localhost:3000/images/exercise.jpg'
    }
    
})

module.exports = model('Exercise',exerciseSchema)