var express = require ('express');
var app = express();
var morgan = requeire('morgan');
var bodyParse = require('body-parse');
var cors = require('cors');

app.use(morgan('dev'))
app.use(bodyParse.urlencoded({'extended':'true'}));
app.use(bodyParse.json());
app.use(cors());

app.use(function(req,res,nex){
    res.header("Access-Control-Allow-Origin:", "*");
    res.header("Access-Control-Allow-Methods:", "POST,GET,OPTIONS");
    RES.header("Access-Control-Allow-Headers:", "Content-Type, Origin, Accept, x-Requested-With");
    next();
});


app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function(){
    console.log("express ouvindo"); 
});