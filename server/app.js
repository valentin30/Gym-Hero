const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')

const { fileStorage, fileFilter } = require('./helpers/multerConfig')

const authRoutes = require('./routes/auth')


const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE',
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
app.use(bodyParser.json())
app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'),
)
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/auth', authRoutes)


app.use((error, req, res, next) => {
    console.log(error)
    const { statusCode, message } = error
    res.status(statusCode).json({ message, status: statusCode })
})

mongoose
    .connect(
        'mongodb+srv://valio:lara@fitnessappdb-mblze.mongodb.net/TheGymHero',
        {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    )
    .then(conn => {
        console.log('Database Connected')
        app.listen(3000)
    })
    .catch(err => {
        console.log(err)
    })
