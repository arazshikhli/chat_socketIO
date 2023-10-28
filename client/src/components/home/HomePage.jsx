import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
export const HomePage = ({socket}) => {
    const navigate=useNavigate()
    const [user,setUser]=useState('')
    
    const handleSubmit=(e)=>{
      e.preventDefault()
      if(user.length>0){
        localStorage.setItem('user',user)
      navigate('/chat')
      }
      
    }
    return (
      <form onSubmit={handleSubmit}>
        <h2>Вход в чат</h2>
        <label htmlFor='user'></label>
        <input type='text'
         id='user'
         value={user}
         onChange={(e)=>setUser(e.target.value)}
         />
         <button type='submit'>Войти</button>
      </form>
    )
}
