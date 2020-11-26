require('dotenv').config()
const Jwt = require('../helper/jwt')
const {User} = require('../models');

module.exports = async (req, res, next) =>{
    try {
        const access_token = req.headers.access_token;
        console.log(access_token);
        if(!access_token){
            res.status(401).json({
                message: 'You need to login to have an access'
            })
        } else {
            const decode = Jwt.verify(access_token);
            req.loggedIn = decode;
            const foundUser = await User.findOne({where: {id: decode.id}})
            if(foundUser){
                next()
            } else {
                res.status(401).json({
                    message: 'You need to login to have an access'
                })
            }
        }
    } catch {
        res.status(401).json({
            message: 'Jangan nakal kamu'
        })
    }
} 
