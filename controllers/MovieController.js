const { mapFinderOptions } = require('sequelize/types/utils')
const { Movie, Genre, Actor } = require('./models')

function stringify(data) {
    console.log(JSON.stringify(data, null, 4))
}

const getMovies = async () => {
    try {
        const movies = await Movie.findAll()
    } catch {
        console.log(error)
        return false
    }
}

const createMovie = async () => {
    try {
        const movies = await Movie.create({
            title: 'Jurassic Park', year: 1993, description: 'Jurassic Park is a 1993 American science fiction action film directed by Steven Spielberg'
        })
    } catch {
        console.log(error)
        return false
    }
}

const updateMovie = async () => {
    try {
        const movies = await Movie.update(
            {name: 'Jurassic World'},
            {where: {name: 'Jurassic Park'}}
        )
    } catch {
        console.log(error)
        return false
    }
}

const deleteMovie = async () => {
    try {
        const movies = await Movie.destroy(
            {where: {name: 'Jurassic Park'}}
        )
    } catch {
        console.log(error)
        return false
    }
}

module.exports = {
    deleteMovie,
    updateMovie,
    getMovies,
    createMovie
  }
  