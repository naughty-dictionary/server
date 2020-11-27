const axios = require('axios')
class owlController{
    static get(req, res, next){
      let dictionaries = ['cat', 'dog', 'macaroni', 'rabbit', 'rose', 'chickweed', 'mete', 'burdock', 'cruller', 'wheelbarrow', 'carcanet', 'bandicoot',
      'ammeter', 'beaver', 'grater', 'stinkbug', 'cashew', 'carton', 'sistrum', 'bushtit', 'hobbyhorse', 'headboard', 'omelette', 'tomahawk']
      let word = dictionaries[Math.floor(Math.random()*dictionaries.length)]
        axios({
            url: 'https://owlbot.info/api/v4/dictionary/' + word,
            method: 'GET',
            headers: {
              Authorization : "Token 71be7839d9f1c1c0384dee6bf442d998054d9a23"
            }
        })
        .then(value => {
            res.status(200).json(value.data)
        })
        .catch(error => {
            next(error)
        })
    }
}

module.exports = owlController