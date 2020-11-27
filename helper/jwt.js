const jwt = require('jsonwebtoken')
require('dotenv').config()

class Jwt{
   static verify(token){
      const result = jwt.verify(token, process.env.SECRETJWT)
      return result
   }
   static sign(obj){
      const result = jwt.sign(obj, process.env.SECRETJWT)
      return result
   }
}

module.exports = Jwt