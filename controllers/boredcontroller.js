const axios = require('axios')
class BoredController{
    static get(req, res, next){
        axios({
            method: 'GET',
            url: 'http://www.boredapi.com/api/activity'
        })
        .then(value => {
            res.status(200).json(value)
        })
        .catch(error => {
            next(error)
        })
    }
}
module.exports = BoredController
