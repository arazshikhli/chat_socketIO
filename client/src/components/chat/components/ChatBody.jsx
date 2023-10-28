import React from 'react'

export const Chatbody = () => {
    return (
        <>
        <header>
            <button className='exit_btn'> Покинуть чат</button>
        </header>
        <div className="container">
            <div className="chats">
                <p>Вы</p>
                <div className="message">
                    <p>Hello</p>
                </div>
            </div>
            <div className="chats">
                <p>Вы</p>
                <div className="message">
                    <p>Hello</p>
                </div>
            </div>
            <div className="chats">
                <p>Вы</p>
                <div className="message">
                    <p>Hello</p>
                </div>
            </div>
        </div>
        </>
    )
}
