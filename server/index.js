'use strict'
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors');

const {mongoose} = require('./database')

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use(require('./routes/user.routes'))
app.use(require('./routes/product.routes'))
app.use(require('./routes/comment.routes'))


//Starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'))
});