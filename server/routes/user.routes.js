const express = require('express')
const api = express.Router()
const userCtrl = require('../controllers/user.controller')

const auth = require('../middlewares/auth')

api.get('/api/users', userCtrl.getUsers)
api.get('/api/users/:id', userCtrl.getUser)

api.post('/api/users/signUp', userCtrl.signUp)
api.post('/api/users/signIn', userCtrl.signIn)

api.delete('/api/users/:id', userCtrl.deleteUser)
api.put('/api/users/:id', userCtrl.editUser)

//Auth
api.get('/api/hasAccess', auth, function(req,res){
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api