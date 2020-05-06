const path = require('path')
const fs = require('fs')

exports.checkError = error => {
    if (!error.statusCode) {
        error.statusCode = 500
    }
    return error
}
exports.throwError = (statusCode, message) => {
    const error = new Error(message)
    error.statusCode = statusCode
    error.message = message
    throw error
}

exports.clearImage = filePath => {
    fs.unlink(path.join(__dirname, '..', filePath), err => {
        console.log(err)
    })
}
