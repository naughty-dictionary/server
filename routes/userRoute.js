const express = require('express');
const route = express.Router();
const Controller = require('../controllers/userController');

route.post('/login', Controller.login);
route.post('/register', Controller.register);
route.post('/googleLogin', Controller.googleLogin);

module.exports = route;