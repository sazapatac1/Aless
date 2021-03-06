const mongoose = require('mongoose')

const URI = 'mongodb://database:27017/alessDB'

mongoose.connect(URI, {useNewUrlParser: true})
    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err))

module.exports = {
    mongoose,
    TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenalesssecreto"
}