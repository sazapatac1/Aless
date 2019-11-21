const express = require('express')
const api = express.Router()
const commentCtrl = require('../controllers/comment.controller')

api.get('/api/comments', commentCtrl.getComments)
api.get('/api/comments/:id', commentCtrl.getComment)
api.get('/api/comments/byUser/:id', commentCtrl.getCommentsByUser)
api.get('/api/comments/byProduct/:id', commentCtrl.getCommentsByProduct)
api.post('/api/comments', commentCtrl.createComment)
api.delete('/api/comments/:id', commentCtrl.deleteComment)
api.put('/api/comments/:id', commentCtrl.editComment)

module.exports = api