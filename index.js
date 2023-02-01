
const express = require("express");
const app = express();
const xmlParser = require('express-xml-bodyparser');
const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.raw({ type: 'application/xml' }));
//middleware
app.use(xmlParser());

const PORT = process.env.PORT||5000;
app.listen(PORT , ()=>{
    //console.log("Server Started at port : " , port_number);
    if(PORT == 5000)
    {
        console.log(`${PORT} used for local host`);
    }
    else
    {
        console.log(`${PORT} used for live`);
    }
})

app.get("/",(req,res)=>{
    res.send("<h1>XML API</h1>");
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

