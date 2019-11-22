const express = require('express')
const api = express.Router()
const productCtrl = require('../controllers/product.controller')

api.get('/api/products', productCtrl.getProducts)
api.get('/api/products/:id', productCtrl.getProduct)
api.post('/api/products', productCtrl.createProduct)
api.delete('/api/products/:id', productCtrl.deleteProduct)
api.put('/api/products/:id', productCtrl.editProduct)

module.exports = api