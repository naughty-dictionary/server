const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secretJWT
class Jwt{
   static verify(token){
      const result = jwt.verify(token, secret)
      return result
   }
   static sign(obj){
      const result = jwt.sign(obj, secret)
      return result
   }
}

module.exports = Jwt