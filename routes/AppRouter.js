const Router = require('express').Router()
const MovieRouter = require('./MovieRouter')

Router.use('/movies', MovieRouter)

module.exports = Router
