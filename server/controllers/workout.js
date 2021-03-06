const Workout = require('../models/workout')
const { checkError, throwError } = require('../helpers/func')

exports.getWorkouts = (req, res, next) => {
    Workout.find({ userId: req.userId })
        .then(workouts => {
            console.log(workouts)
            res.status(200).json({ workouts })
        })
        .catch(error => next(checkError(error)))
}
exports.getWorkout = (req, res, next) => {
    return Workout.findOne({
        userId: req.userId,
        date: new Date().toJSON().slice(0, 10).replace(),
    })
        .then(workout => {
            if (!workout) {
                return res.status(200).json({ exercises: [] })
            }
            res.status(200).json({ exercises: workout.exercises })
        })
        .catch(error => next(checkError(error)))
}
exports.pushExercises = (req, res, next) => {
    const { exercises } = req.body
    if (!exercises) {
        throwError(422, 'Validation Failed')
    }
    Workout.findOne({
        userId: req.userId,
        date: new Date().toJSON().slice(0, 10).replace(),
    })
        .then(workout => {
            if (!workout) {
                workout = new Workout({
                    userId: req.userId,
                })
            }
            workout.exercises = exercises
            return workout.save()
        })
        .then(workout => {
            console.log(workout)
            res.status(201).json({ workout })
        })
        .catch(error => next(checkError(error)))
}
