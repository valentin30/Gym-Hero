const { Router } = require('express')
const authCheck = require('../middleware/authCheck')
const workoutController = require('../controllers/workout')

const router = Router()

router.get('/', authCheck, workoutController.getWorkouts)
router.get('/today', authCheck, workoutController.getWorkout)

router.post('/', authCheck, workoutController.pushExercises)

module.exports = router
