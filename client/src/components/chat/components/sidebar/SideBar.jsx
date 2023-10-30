import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'



export const SideBar = ({socket}) => {
  const [users,setUsers]=useState([])
  
  useEffect(()=>{
    socket.on('responseNewUsers',(data)=> {[...users],setUsers(data)
   
    })
    console.log("sidebar socket",socket)
  },[socket,users])
    return (
        <div className='sidebar'>
            <h4 className='header'>Users</h4>
          
              <ul className='users'>
               {users.map(element=>(<li key={element.socketID}>
                {element.user}
               </li>))}
              </ul>
           
          
        </div>
    )
}
