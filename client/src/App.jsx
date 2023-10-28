import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import socketIo from 'socket.io-client';
import {ChatPage} from './components/chat/ChatPage.jsx'
import{HomePage} from './components/home/HomePage.jsx'

const socket=socketIo.connect('http://localhost:3002')

function App() {
 
  return (
   <Routes>
    <Route path='/' element={<HomePage socket={socket}/>}/>
    <Route path='/chat' element={<ChatPage socket={socket}/>}/>
   </Routes>
  )
}

export default App
