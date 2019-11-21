'use strict'

//importando mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//libreria encriptación
const bcrypt = require('bcrypt-nodejs')


//definiendo schema de usuario
const UserSchema = new Schema({
    name:       {type: String, required: true, trim:true},
    password:   {type: String, select: false, required: true},
    email:      {type: String, unique: true, lowercase:true, required: true, trim:true},
    date:       {type: String, required: true, trim:true},
    city:       {type: String, required: true, trim:true},
    address:    {type: String, required: true}


})

UserSchema.pre('save', function (next) {
  let user = this
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, function (err, hash){
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('User',UserSchema)