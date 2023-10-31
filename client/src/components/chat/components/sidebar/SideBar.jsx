import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'



export const SideBar = ({socket}) => {
  const [users,setUsers]=useState([])
  
  useEffect(()=>{
    socket.on('responseNewUsers',(data)=> {[...users],setUsers(data)
   
    })
    console.log("sidebar socket",socket)
  },[socket,users])
  const filteredList=users.filter((value,index,self)=>index===self.findIndex((t)=>(t.user===value.user)))
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
