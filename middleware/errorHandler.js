module.exports = (err, req, res, next) => {
    console.log(err);
    if (err.status) {
        res.status(err.status).json(err.message)
    }else if(err.errors[0]){
        res.status(400).json(err.errors[0].message)
    } else{
        res.status(500).json(`oops sorry, it seems any problem from server`)
    }
}