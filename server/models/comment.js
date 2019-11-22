'use strict'

//importando mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema


//definiendo schema de comentario
const CommentSchema = new Schema({
    message:    {type: String, required: true},
    id_userF:   {type: String, required: true , trim:true},
    id_productF:{type: String, required: true, trim:true},
})


module.exports = mongoose.model('Comment',CommentSchema)