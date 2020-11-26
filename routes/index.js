const express = require('express');
const router = express.Router();
const userRoute = require('./userRoute');
const gabutRoute = require('./gabutRoute');
const authentication = require('../middleware/authentication');


router.use('/user', userRoute);
router.use(authentication);
router.use('/gabut', gabutRoute);


module.exports = router;