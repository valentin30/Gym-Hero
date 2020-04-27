const Post = require('../models/post')
const { checkError, throwError } = require('../helpers/func')

exports.getPosts = (req, res, next) => {
    Post
        .find()
        .then(posts => {
            if(!posts){
                throwError(404, 'Posts Not Found')
            }
            res.status(200).json({posts})
        })
        .catch(error => {
            next(checkError(error))
        })
}
exports.getPost = (req, res, next) => {
    const { id } = req.params
    Post
        .findById(id)
        .then(post => {
            if(!post){
                throwError(404, 'Post Not Found')
            }
            res.status(200).json({post})
        })
        .catch(error => {
            next(checkError(error))
        })
}

exports.createPost = (req, res, next) => {
    const { _id, title, img, paragraphs } = req.body
    if(!_id || !title || !img || paragraphs.length === 0){
        throwError(422, 'Validation failed')
    }
    const post = new Post({
        _id: _id,
        title,
        img,
        paragraphs
    })
    return post
        .save()
        .then(post => {
            res.status(201).json({post})
        })
        .catch(error => {
            next(checkError(error))
        })
}