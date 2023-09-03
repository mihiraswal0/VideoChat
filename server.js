const express=require('express');
const app=express();
require('dotenv').config();
const port=process.env.PORT ||5000;
const cors=require('cors');
const bodyparser=require('body-parser');

app.use(cors());
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send("Api Runing");
})




//
app.listen(port,()=>{
    console.log("Listening on port"+port);
})