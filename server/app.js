const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
require('dotenv').config()

const { fileStorage, fileFilter } = require('./helpers/multerConfig')

const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/user')
const exerciseRoutes = require('./routes/exercise')
const workoutRoutes = require('./routes/workout')

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
app.use(bodyParser.json())
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
)
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/posts', postRoutes)
app.use('/exercise', exerciseRoutes)
app.use('/workout', workoutRoutes)

app.use((error, req, res, next) => {
    console.log(error)
    const { statusCode, message } = error
    res.status(statusCode).json({ message, status: statusCode })
})

mongoose
    .connect(process.env.CONNECTION_STRING, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(conn => {
        console.log('Database Connected')
        app.listen(3000)
    })
    .catch(err => {
        console.log(err)
    })
