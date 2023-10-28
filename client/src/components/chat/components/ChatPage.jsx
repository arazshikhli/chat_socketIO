import React from 'react'
import { SideBar} from './sidebar/SideBar.jsx'
import { MessageBlock } from './message-block/MessageBlock.jsx'
import {Chatbody} from './body/ChatBody.jsx'
import styles from './styles.module.css'
export const ChatPage = ({socket}) => {
    return (
        <div className={styles.chat}>
            <SideBar/>
            <main className={styles.main}>
                <Chatbody/>
                <MessageBlock/>
            </main>
        </div>
    )
}
