const express=require('express');
require('dotenv').config()
console.log(process.env.PORT)
const app=express();
const PORT=process.env.PORT

const http=require('http').Server(app)
const cors=require('cors')
app.use(cors())
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
const users=[]

socketIO.on('connection',(socket)=>{
    console.log(`${socket.id} user connected`)
    socket.on('message',(data)=>{
        console.log('Message:  ',data)
        socketIO.emit('response',data)
    })
    socket.on('typing',(data)=>socket.broadcast.emit('responseTyping',data))
    socket.on('newUser',(data)=>{
        users.push(data)
        socketIO.emit('responseNewUsers',users)
    })
    socket.on('disconnect',()=>{
        console.log(`${socket.id} disconnected`)
        
    })
})

http.listen(PORT,()=>{
    console.log(`Server has been started at port ${PORT}`)
})
