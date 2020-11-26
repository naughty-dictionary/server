module.exports = app.use((err, req, res, next) => {
    if (err.status) {
        res.status(err.status).json(err.message)
    }else if(err.name == 'SequelizeValidationError'){
        res.status(400).json(err.errors[0].message)
    }else{
        console.log(err);
        res.status(500).json(`oops sorry, it seems any problem from server`)
    }
})