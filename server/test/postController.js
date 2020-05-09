const { expect } = require('chai')
const mongoose = require('mongoose')
const postController = require('../controllers/posts')
const sinon = require('sinon')
const Post = require('../models/post')

describe('Post controller', () => {
    before(done => {
        mongoose
            .connect(
                'mongodb+srv://valio:lara@fitnessappdb-mblze.mongodb.net/TheGymHero?retryWrites=true',
                {
                    useFindAndModify: false,
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                },
            )
            .then(() => {
                done()
            })
    })
    it('should return an object with an array of posts and a status code of 200', done => {
        const res = {
            status: function (code) {
                this.statusCode = code
                return this
            },
            json: function (data) {
                this.posts = data.posts
                return this
            },
        }
        postController
            .getPosts({}, res, () => {})
            .then(() => {
                expect(res.statusCode).to.be.equal(200)
                expect(res.posts).to.be.an('array')
                done()
            })
    })
    after(done => {
        mongoose.disconnect().then(() => {
            done()
        })
    })
})
