const axios = require('axios')
class TriviaController{
    static get(req, res, next){
        axios({
            url: 'https://opentdb.com/api.php?amount=1&type=boolean',
            method: "GET"
        })
        .then((response)=>{
            res.status(201).json(response.data);
        })
        .catch((err) =>{
            console.log(err);
            next(err);
        })
    }
}
module.exports = TriviaController