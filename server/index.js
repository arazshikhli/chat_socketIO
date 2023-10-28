const express=require('express');
require('dotenv').config()
console.log(process.env.PORT)
const app=express();
const PORT=process.env.PORT

const http=require('http').Server(app)
const cors=require('cors')
const socketIO=require('socket.io')(http,{
    cors:{
        origin:'http://localhost:5173'
    }
})

app.get('api',(req,res)=>{
    res.json({
        message:"hello"
    })
})

socketIO.on('connection',(socket)=>{
    console.log(`${socket.id} user connected`)
    socket.on('disconnect',()=>{
        console.log(`${socket.id} disconnected`)
    })
})

http.listen(PORT,()=>{
    console.log(`Server has been started at port ${PORT}`)
})
