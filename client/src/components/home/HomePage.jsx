import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
export const HomePage = ({socket}) => {
    const navigate=useNavigate()
    const [user,setUser]=useState('')
    
    const handleSubmit=(e)=>{
      e.preventDefault()
      if(user.length>0){
        localStorage.setItem('user',user)
      socket.emit('newUser',{user,socketID:socket.id})
      navigate('/chat')
      }

      else{
        console.log('enter login')
      }
      
    }
    return (
      <form onSubmit={handleSubmit} 
      className={styles.container}
      >
        <h2>Вход в чат</h2>
        <label htmlFor='user'></label>
        <input type='text'
         id='user'
         value={user}
         onChange={(e)=>setUser(e.target.value)}
         className={styles.userInput}
         />
         <button type='submit' className={styles.homeBtn}>Войти</button>
      </form>
    )
}
