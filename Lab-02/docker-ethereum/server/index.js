const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const contractAPIRoutes = require("./routes/contract-API");
const smartContractAPIRoutes = require("./routes/smart-contract-API");

const port = 4000;

const corsOptions = {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
  };
  
  app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        limit:"50mb",
        extended:false,
        parameterLimit:50000    
    })
);


// use the routes specified in route folder
app.use("/", contractAPIRoutes);
app.use("/",smartContractAPIRoutes);


app.use(function(err, req,res, next){
    res.status(422).send({error: err.message});
});

//listen to the server
app.listen( port, function(){
    console.log(`Listening to the port ${port} .....`);
});