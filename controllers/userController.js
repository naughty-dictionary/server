const {User} = require('../models');
const Bcrypt = require('../helper/bcrypt');
const jwt = require('../helper/jwt');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLECLIENT_ID);

class Controller {
    static async login(req, res, next) {
        const loginAccount = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            const foundUser = await User.findOne({where: {email: loginAccount.email}})
            if(foundUser && Bcrypt.compare(loginAccount.password, foundUser.password)){
                const payload = {
                    id: foundUser.id,
                    email: foundUser.email,
                }
                const access_token = jwt.sign(payload);
                res.status(200).json({access_token});

            } else {
                throw {
                    status: 401,
                    message: 'Email / Password Incorrect'
                }
            }
        } catch (error){
            next(error);
        }
    }
    
    static async register(req, res, next){
        const registerAccount = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            const newAccount = await User.create(registerAccount);
            res.status(201).json({id: newAccount.id, email: newAccount.email})
        } catch (error){
            next(error)
        }
    }

    // static async googleLogin(req, res, next){
    //     try { 
    //         const ticket = await client.verifyIdToken({
    //         idToken: req.body.googleToken,
    //         audience: process.env.GOOGLECLIENT_ID,
    //         });
    //         const payload = ticket.getPayload();

    //         const loginAccount = await User.findOne({where: {email: payload.email}});
    //         if(loginAccount){
    //             const access_token = jwt.sign({id: loginAccount.id, email: loginAccount.email})
    //             res.status(200).json({access_token});
    //         } else {
    //             const newAccount = await User.create({
    //                 email: payload.email,
    //                 password: process.env.NEWACCPASS
    //             })
    //             const access_token = jwt.sign({id: newAccount.id, email: newAccount.email})
    //             res.status(200).json({access_token});
    //         }
    //     } catch(error){
    //         next(error);
    //     }
    // }
}

module.exports = Controller