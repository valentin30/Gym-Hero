const { expect } = require('chai')
const mongoose = require('mongoose')
const sinon = require('sinon')
const exerciseController = require('../controllers/exercise')

describe('Exercise controller', () => {
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
    it('should return an object with an array of exercises and a status code of 200', done => {
        const res = {
            status: function (code) {
                this.statusCode = code
                return this
            },
            json: function (data) {
                this.exercises = data.exercises
                return this
            },
        }
        exerciseController
            .getExercises({}, res, () => {})
            .then(() => {
                expect(res.statusCode).to.be.equal(200)
                expect(res.exercises).to.be.an('array')
               // expect(res.exercises.lenght).to.not.be(0)
                done()
            })
    })
    after(done => {
        mongoose.disconnect().then(() => {
            done()
        })
    })
})