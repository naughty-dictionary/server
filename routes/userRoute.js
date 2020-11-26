const express = require('express');
const route = express.Router();
const Controller = require('../controllers/userController');

route.post('/login', Controller.login);
route.post('/register', Controller.register);



module.exports = route;