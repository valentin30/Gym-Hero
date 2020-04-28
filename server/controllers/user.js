const User = require('../models/user')

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

exports.modify = (req, res, next) => {
    const key = Object.keys(req.body)[0]
    const value = req.body[0]
    User
        .findById(req.userId)
        .then(user => {
            user[key] = value
            return user.save()
        })
        .then(user => {
            res.status(201).json({user})
        })
}