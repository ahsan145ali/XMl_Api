const express = require("express");
const app = express();
const xmlParser = require('express-xml-bodyparser');
const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.raw({ type: 'application/xml' }));
//middleware
app.use(xmlParser());

const port_number = 5000;
app.listen(port_number , ()=>{
    console.log("Server Started at port : " , port_number);
})


app.post("/accept_xml",(req,res)=>{

    const gotXml = req.body;
    console.log(gotXml);

    //res.set('Content-Type', 'application/xml');
    //res.send(gotXml);
    if(gotXml!=undefined){
        res.json({received: true});
    }
    else
    {
        res.json({received: false});
    }
})

