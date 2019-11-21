'use strict'

//importando mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema


//definiendo schema de producto
const ProductSchema = new Schema({
    name:       {type: String, required: true, trim:true},
    description:{type: String, required: true, trim:true},
    category:   {type: String, required: true, trim:true},
    price:      {type: Number, required: true, trim:true},
})


module.exports = mongoose.model('Product',ProductSchema)