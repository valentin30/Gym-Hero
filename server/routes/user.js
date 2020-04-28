const { Router } = require('express')
const authCheck = require('../middleware/authCheck')
const userController = require('../controllers/user')

const router = Router()

router.get('/', authCheck, userController.getUser)
router.put('/photo', authCheck, userController.changePhoto)
router.put('/name', authCheck, userController.changeName)
router.put('/gender', authCheck, userController.changeGender)
router.put('/height', authCheck, userController.changeHeight)
router.put('/weight', authCheck, userController.changeWeight)
router.put('/date', authCheck, userController.changeDateOfBirth)


module.exports = router