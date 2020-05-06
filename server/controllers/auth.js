const User = require('../models/user')
const { checkError, throwError } = require('../helpers/func')
const jwt = require('jsonwebtoken')
const { hash, compare } = require('bcrypt')

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    let foundedUser
    User.findOne({ email })
        .then(user => {
            if (!user) {
                throwError(404, "Couldn't find a user with that email!")
            }
            foundedUser = user
            return compare(password, user.password)
        })
        .then(isEqual => {
            if (!isEqual) {
                throwError(401, 'Wrong password try again!')
            }
            const token = jwt.sign(
                {
                    email: foundedUser.email,
                    userId: foundedUser._id.toString(),
                },
                'secret',
                { expiresIn: '1h' },
            )
            res.status(200).json({
                token,
                user: foundedUser,
            })
        })
        .catch(error => {
            next(checkError(error))
        })
}

exports.signup = (req, res, next) => {
    const { name, email, password } = req.body
    User.findOne({ email })
        .then(user => {
            if (user) {
                throwError(422, 'Email already in use')
            }
            if (!name || !email || password.length < 5) {
                throwError(422, 'Please provide all the information required')
            }
            return hash(password, 12)
        })
        .then(hash => {
            const user = new User({
                name,
                email,
                password: hash,
            })
            return user.save()
        })
        .then(user => {
            const token = jwt.sign(
                {
                    email: user.email,
                    userId: user._id.toString(),
                },
                'secret',
                { expiresIn: '1h' },
            )
            res.status(201).json({
                token,
                user,
            })
        })
        .catch(error => {
            next(checkError(error))
        })
}
