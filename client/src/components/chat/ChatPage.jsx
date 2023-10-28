import React from 'react'
import { SideBar} from './components/sidebar.jsx'
import { MessageBlock } from './components/MessageBlock.jsx'
import {Chatbody} from './components/ChatBody.jsx'

export const ChatPage = ({socket}) => {
    return (
        <div className='chat'>
            <SideBar/>
            <main className='main'>
                <Chatbody/>
                <MessageBlock/>
            </main>
        </div>
    )
}
