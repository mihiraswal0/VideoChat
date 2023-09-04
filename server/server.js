const express=require('express');
const app=express();
require('dotenv').config();
require('./db/database.js');
const port=process.env.PORT ||5000;
const cors=require('cors');
const bodyparser=require('body-parser');
const data=require('./data/data.js');
app.use(cors());
app.use(bodyparser.json());
const userRoutes=require('./routes/userRoutes.js');

app.get('/',(req,res)=>{
    res.send("Api Runing");
})
app.use('/api/routes',userRoutes);


//
app.listen(port,()=>{
    console.log("Listening on port"+port);
})