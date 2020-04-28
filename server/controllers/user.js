const User = require('../models/user')
const { checkError, throwError, clearImage } = require('../helpers/func')

exports.getUser = (req, res, next) => {
    User.findById(req.userId)
        .then(user => {
            if (!user) {
                throwError(404, 'User Not Found')
            }
            res.status(200).json({ user })
        })
        .catch(error => {
            next(checkError(error))
        })
}

exports.changePhoto = (req, res, next) => {
    if (!req.file) {
        throwError(422, 'Make sure you provide all the data needed')
    }
    const imageUrl = req.file.path
    User.findById(req.userId)
        .then(user => {
            if (user.imageUrl !== 'images/avatar.png') {
                clearImage(user.imageUrl)
            }
            user.imageUrl = imageUrl
            return user.save()
        })
        .then(user => {
            res.status(201).json({ user })
        })
        .catch(error => {
            next(checkError(error))
        })
}

exports.changeName = (req, res, next) => {
    const { name } = req.body
    console.log(req.body)
    if (!name) {
        throwError(422, 'Make sure you provide all the data needed')
    }
    User.findById(req.userId)
        .then(user => {
            user.name = name
            return user.save()
        })
        .then(user => {
            res.status(201).json({ user })
        })
        .catch(error => {
            next(checkError(error))
        })
}

exports.changeGender = (req, res, next) => {
    const { gender } = req.body
    if (gender !== 'Male' && gender !== 'Female') {
        throwError(422, 'Not Valid')
    }
    User.findById(req.userId)
        .then(user => {
            user.gender = gender
            return user.save()
        })
        .then(user => {
            res.status(201).json({ user })
        })
        .catch(error => {
            next(checkError(error))
        })
}

exports.changeHeight = (req, res, next) => {
    const { height } = req.body
    if (height < 0) {
        throwError(422, 'Not Valid')
    }
    User.findById(req.userId)
        .then(user => {
            user.height = height
            return user.save()
        })
        .then(user => {
            res.status(201).json({ user })
        })
        .catch(error => {
            next(checkError(error))
        })
}

exports.changeWeight = (req, res, next) => {
    const { weight } = req.body
    if (weight < 0) {
        throwError(422, 'Not Valid')
    }
    User.findById(req.userId)
        .then(user => {
            user.weight = weight
            return user.save()
        })
        .then(user => {
            res.status(201).json({ user })
        })
        .catch(error => {
            next(checkError(error))
        })
}

exports.changeDateOfBirth = (req, res, next) => {
    const dateOfBirth = new Date(req.body.dateOfBirth)
    if (dateOfBirth > new Date('2006')) {
        throwError(422, 'You are not old enough')
    }
    User.findById(req.userId)
        .then(user => {
            user.dateOfBirth = dateOfBirth.toJSON().slice(0, 10).replace()
            return user.save()
        })
        .then(user => {
            res.status(201).json({ user })
        })
        .catch(error => {
            next(checkError(error))
        })
}
