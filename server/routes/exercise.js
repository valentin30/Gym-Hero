const { Router } = require('express')
const authCheck = require('../middleware/authCheck')
const exerciseController = require('../controllers/exercise')

const router = Router()

router.post('/', authCheck, exerciseController.createExercise)

module.exports = router
