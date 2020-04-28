const { Router } = require('express')
const authCheck = require('../middleware/authCheck')
const userController = require('../controllers/user')

const router = Router()

router.get('/user', authCheck, userController.getUser)
router.put('/', authCheck, userController.modify)

module.exports = router