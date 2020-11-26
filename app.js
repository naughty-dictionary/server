const express = require("express");
const app = express();
const port = 4000;
const router =require('./routes/index');
const errorHandler = require('./middleware/errorHandler');


app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use("/", router);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log("Listening on port: ", port);
})

