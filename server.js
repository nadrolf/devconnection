const express = require('express')
const mongoose = require('mongoose')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express()

// mongoose init
const db = require('./config/keys', { useNewUrlParser: true }).mongoURI
// connect to mongo db
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Passport middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport)

// User Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

// server static assets if in production
if (process.env.MODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'))

  app.get('*', (reg, res) => {
    res.sendFile(path.resolve__dirname, 'client', 'build', 'index.html')
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
