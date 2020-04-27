const { Router } = require('express')

const postController = require('../controllers/posts')

const router = Router()

router.get('/', postController.getPosts)
router.get('/:id', postController.getPost)

router.post('/', postController.createPost)


module.exports = router