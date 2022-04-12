const Router = require('express').Router()
const controller = require('../controllers/MovieController')

Router.get('/', controller.GetMovies)
Router.get('/:movie_id', controller.createMovie)
Router.get('/:movie_id', controller.updateMovie)
Router.get('/:movie_id', controller.deleteMovie)

module.exports = Router
