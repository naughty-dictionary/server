const routes = require('express').Router()
const BoredController = require('../controllers/boredcontroller')
const TriviaController = require('../controllers/triviaController')
const OwlController = require("../controllers/owlController")
routes.get('/bored', BoredController.get)
routes.get('/trivia', TriviaController.get)
routes.get('/owl', OwlController.get)
module.exports = routes