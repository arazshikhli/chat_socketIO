import React,{useState} from 'react'
import styles from './styles.module.css'

export const MessageBlock = ({socket}) => {

    const [message,setMessage]=useState('')

    const handleSend=(e)=>{
        e.preventDefault();
       if(message.trim()&&localStorage.getItem('user')){
        socket.emit('message',{
            text:message,
            name:localStorage.getItem('user'),
            id:`${socket.id}--${Math.random()}`,
            socketID:socket.id
        })
   
       }
        setMessage('')
    }
    return (
        <div className='message-block'>
            <form
            onSubmit={handleSend}
            >
                <input 
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                type="text" className='user-message'/>
                <button type='submit'
                className={styles.btn}
                >Сказать </button>
            </form>
        </div>
    )
}
