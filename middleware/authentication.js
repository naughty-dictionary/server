require('dotenv').config()
const Jwt = require('../helper/jwt')
module.exports = async (req, res, next) => {
    const token = req.headers.access_token
    if (token) {
        res.status(400).json(`you must login first`)
    }else{
        try {
            const decoded = await Jwt.verify(token)
            if (decoded) {
                req.loginuser = decoded
            }else{
                throw {
                    status: 401,
                    message: `your session is time up`
                }
            }
        } catch (error) {
            next(error)
        }
    }
}
