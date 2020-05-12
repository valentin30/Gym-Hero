const jwt = require('jsonwebtoken')
const { throwError } = require('../helpers/func')

module.exports = (req, res, next) => {
    const token = req.get('Authorization')
    if (!token) {
        throwError(401, 'not authenticated')
    }
    let decodedToken
    try {
        decodedToken = jwt.verify(token, 'secret')
    } catch (err) {
        err.statusCode = 403
        throw err
    }
    if (!decodedToken) {
        throwError(401, 'not authenticated')
    }
    req.userId = decodedToken.userId
    next()
}
