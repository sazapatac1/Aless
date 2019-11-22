const User = require('../models/user')
const service = require('../services/services');
const bcrypt = require('bcrypt-nodejs')
const userCtrl = {}

userCtrl.getUsers = async(req,res)=>{
    //buscar todos los usuarios en la base de datos
    const users = await User.find()
    res.status(200).send(users)
}

userCtrl.getUser = async(req,res)=>{
    const user = await User.findById(req.params.id)
    res.status(200).send(user)
}

userCtrl.signUp = async(req,res)=>{
    const user = new User(req.body)
    await user.save((err) => {
        if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

        return res.status(200).send({
            message: 'Registro exitoso',
            accessToken: service.createToken(user),
            id: user._id,
            email: user.email,
            name: user.name
        })
    })
}

userCtrl.signIn = async(req, res)=>{
    const expiresIn = 24*60*60
    await User.findOne({ email: req.body.email }).select('email name password').exec(function (err, user) {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ message: 'Usuario no registrado' })
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.status(200).send({
                message: 'Login exitoso',
                accessToken: service.createToken(user),
                id: user._id,
                email: user.email,
                name: user.name,
                expiresIn: expiresIn
            })
        }
        else {
            res.status(400).send({
                message: 'Contraseña incorrecta, intenta de nuevo!'
            })
        }
    })
}


userCtrl.editUser = async(req,res) =>{
    const {id} = req.params
    const user = {
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        city: req.body.city,
        address: req.body.address,
        password: req.body.password
    }
    await User.findByIdAndUpdate(id, {$set: user}, {new:true})
    res.status(200).send({message: 'El usuario ha sido editado'})
}

userCtrl.deleteUser = async(req,res)=>{
    await User.findByIdAndRemove(req.params.id)
    res.status(200).send({message: 'El usuario ha sido eliminado'})
}

module.exports = userCtrl