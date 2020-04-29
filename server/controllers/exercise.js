const Exercise = require('../models/exercise')
const { checkError, throwError } = require('../helpers/func')

exports.getExercises = (req, res, next) => {
    Exercise.find()
        .then(exercises => {
            res.status(200).json({ exercises })
        })
        .catch(error => next(checkError(error)))    
}

exports.createExercise = (req, res, next) => {
    const { muscles, name } = req.body
    if (!name || muscles.length === 0) {
        throwError(422, 'Please provide all the information we require')
    }
    Exercise.findOne({ name })
        .then(ex => {
            if (ex) {
                throwError(422, 'Exercise already exists')
            }
            const exercise = new Exercise({ muscles, name })
            return exercise.save()
        })
        .then(exercise => {
            res.status(201).json({ exercise })
        })
        .catch(error => next(checkError(error)))
}
