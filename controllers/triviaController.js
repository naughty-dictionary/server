const axios = require('axios')
class TriviaController{
    static get(req, res, next){
        axios({
            method: 'GET',
            url: 'https://opentdb.com/api.php?amount=1&difficulty=hard&type=boolean'
        })
        .then(value => {
            res.status(200).json(value)
        })
        .catch(error => {
            next(error)
        })
    }
}
module.exports = TriviaController