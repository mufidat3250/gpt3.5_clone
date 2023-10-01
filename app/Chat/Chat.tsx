import React from 'react'
import MessageIcon from '../Vectors/MessageIcon'
import './Chat.scss'

const Chat = ({date, desc}:{date:string, desc:string}) => {
  return (
    <div className='chat-wrapper'>
        <MessageIcon/>
        <p>{desc}</p>
    </div>
  )
}

export default Chat