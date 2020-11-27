const axios = require('axios')
class BoredController{
    static get(req, res, next){
        axios({
            url: 'http://www.boredapi.com/api/activity',
            method: "GET"
        })
        .then((response)=>{
            res.status(201).json({data: response.data});
        })
        .catch((err) =>{
            console.log(err);
            next(err);
        })
    }
}
module.exports = BoredController
