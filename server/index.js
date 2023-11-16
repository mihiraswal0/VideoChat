const express=require('express');
const path=require('path');
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
const { notFound,error } = require('./middleware/errorHandler.js');
const chatRoutes =require('./routes/chatRoutes.js');
const messageRoutes=require('./routes/messageRoutes.js');

app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);
app.use('/api/message',messageRoutes);
// app.use(error);


// --------------------------deployment------------------------------


  app.get("/", (req, res) => {
    res.send("API is running..");
  })

// --------------------------deployment------------------------------



const server=app.listen(port,()=>{
    console.log("Listening on port"+port);
})


const io=require('socket.io')(server,{
    pingTimeout:60000,
    cors:{
     origin:"https://videochat-vzcw.onrender.com"
    }
})
io.on('connection',(socket)=>{
    console.log("Connect to socket");
    socket.on('setup',(userData)=>{
        socket.join(userData._id);
        // console.log(userData._id);
        socket.emit("connected");
    }); 
    socket.on('join chat',(room)=>{
        socket.join(room); 
    })
    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));
    socket.on("new message", (newMessageRecieved) => {
        var chat = newMessageRecieved.chat;
    
        if (!chat.users) return console.log("chat.users not defined");
    
        chat.users.forEach((user) => {
          if (user._id == newMessageRecieved.sender._id) return;
    
          socket.in(user._id).emit("message recieved", newMessageRecieved);
        })
    });
    socket.off("setup", () => {
        console.log("USER DISCONNECTED");
        socket.leave(userData._id);
      });
    
})