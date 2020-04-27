const { model, Schema } = require('mongoose')

const postSchema = Schema({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    paragraphs: [
        {
            title: {
                type: String,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,
            },
        },
    ],
})

module.exports = model('Posts', postSchema)
