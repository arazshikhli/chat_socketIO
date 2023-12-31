import React, { useState,useEffect } from 'react'
import { SideBar} from './sidebar/SideBar.jsx'
import { MessageBlock } from './message-block/MessageBlock.jsx'
import {Chatbody} from './body/ChatBody.jsx'
import styles from './styles.module.css'


export const ChatPage = ({socket}) => {
   
    const [messages,setMessages]=useState([]);
    const [status,setStatus]=useState();
    useEffect(()=>{
        socket.on('responseTyping',(data)=>{
            setStatus(data)
        setTimeout(()=>setStatus(''),1000)})
        
    },[socket])
    useEffect(()=>{
        
        socket.on('response',(data)=>
            setMessages([...messages,data])
        ,)
        console.log("chat page socket: ",socket)
    },[socket,messages])
    return (
        <div className={styles.chat}>
            <SideBar socket={socket}/>
            <main className={styles.main}>
                <Chatbody messages={messages} status={status}/>
                <MessageBlock socket={socket}/>
            </main>
        </div>
    )
}
