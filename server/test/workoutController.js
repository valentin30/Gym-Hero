const Workout = require('../models/workout')
const { expect } = require('chai');
const sinon = require('sinon')
const { checkError, throwError } = require('../helpers/func')
const workoutController = require('../controllers/workout')

describe('Workout controller',() => {
    it('should throw error when database fails', () => {
        sinon.stub(Workout, 'findOne')
        Workout.findOne.throws()
        expect(workoutController.getWorkout.bind(this, {}, {}, () => {})).to.throw()
        Workout.findOne.restore()
    })
})