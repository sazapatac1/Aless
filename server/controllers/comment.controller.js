const Comment = require('../models/comment')
const commentCtrl = {}

commentCtrl.getCommentsByUser = async(req,res)=>{
    //Obtiene los comentarios realizados por el usuario id
    const comments = await Comment.find({'id_userF': req.params.id}, 'message id_productF')
    res.status(200).send(comments)
}

commentCtrl.getCommentsByProduct = async(req,res)=>{
    //Obtiene los comentarios del producto id
    const comments = await Comment.find({'id_productF': req.params.id}, 'message id_userF')
    res.status(200).send(comments)
}

commentCtrl.getComments = async(req,res)=>{
    const comments = await Comment.find()
    res.status(200).send(comments)
}


commentCtrl.getComment = async(req,res)=>{
    const comment = await Comment.findById(req.params.id)
    res.status(200).send(comment)
}

commentCtrl.createComment = async(req,res)=>{
    const comment = new Comment(req.body)
    await comment.save()
    res.status(200).send({message: 'El producto ha sido creado'})
}

commentCtrl.editComment = async(req,res) =>{
    const {id} = req.params
    const comment = {
        messsage: req.body.message,
        id_userF: req.body.id_userF,
        id_productF: req.body.id_productF
    }
    await Comment.findByIdAndUpdate(id, {$set: comment}, {new:true})
    res.status(200).send({message: 'El comentario se ha editado'})
}

commentCtrl.deleteComment = async(req,res)=>{
    await Comment.findByIdAndRemove(req.params.id)
    res.status(200).send({message: 'El comentario ha sido eliminado'})
}

module.exports = commentCtrl