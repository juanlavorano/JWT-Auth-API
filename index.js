const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// DOTENV
dotenv.config()

// CONNECT TO MONGODB
mongoose.set('useUnifiedTopology', true)
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true }
    , () => console.log('Connected to DB'))

// IMPORT ROUTES
const authRoute = require('./routes/auth')

// ROUTES MIDDLEWARES
app.use(express.json())

app.use('/api/user', authRoute)

app.listen('3000', () => console.log('Server running'))