import React from 'react'
import styles from './styles.module.css'
export const Chatbody = () => {
    return (
        <>
        <header className={styles.header}>
            <button className={styles.header}
            > Покинуть чат</button>
        </header>
        <div className={styles.container}>
            <div className={styles.chats}>
                <p className={styles.senderName1}>Вы</p>
                <div className={styles.messageSender}>
                    <p>Hello</p>
                </div>
            </div>
            <div className={styles.chats}>
                <p className={styles.senderName2}>Вы</p>
                <div className={styles.messageRecipient}>
                    <p>Hello</p>
                </div>
            </div>
        </div>
        </>
    )
}
