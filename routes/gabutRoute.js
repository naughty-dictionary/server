const routes = require('express').Router()
const BoredController = require('../controllers/boredcontroller')
const TriviaController = require('../controllers/triviaController')

routes.get('/bored', BoredController.get)
routes.get('/trivia', TriviaController.get)

module.exports = routes