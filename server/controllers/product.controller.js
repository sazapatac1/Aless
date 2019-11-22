const Product = require('../models/product')
const productCtrl = {}

productCtrl.getProducts = async(req,res)=>{
    //buscar todos los productos en la base de datos
    const products = await Product.find()
    res.status(200).send(products)
}

productCtrl.getProduct = async(req,res)=>{
    const product = await Product.findById(req.params.id)
    res.status(200).send(product)
}

productCtrl.createProduct = async(req,res)=>{
    const product = new Product(req.body)
    await product.save()
    res.status(200).send({message: 'El producto ha sido creado'})
}

productCtrl.editProduct = async(req,res) =>{
    const {id} = req.params
    const product = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price
    }
    await Product.findByIdAndUpdate(id, {$set: product}, {new:true})
    res.status(200).send({message: 'El producto ha sido editado'})
}

productCtrl.deleteProduct = async(req,res)=>{
    await Product.findByIdAndRemove(req.params.id)
    res.status(200).send({message: 'El producto ha sido eliminado'})
}

module.exports = productCtrl