import React from 'react'
import MessageIcon from '../Vectors/MessageIcon'
import './Chat.scss'

const Chat = () => {
  return (
    <div className='chat-wrapper'>
        <MessageIcon/>
        <p>Description</p>
    </div>
  )
}

export default Chat