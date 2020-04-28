const { Router } = require('express')

const postController = require('../controllers/posts')
const authCheck = require('../middleware/authCheck')

const router = Router()

router.get('/', authCheck, postController.getPosts)
router.get('/:id', authCheck, postController.getPost)

router.post('/', authCheck, postController.createPost)


module.exports = router