import React from 'react'
import './Input.scss'
import SearchIcon from '../Vectors/Search'

const Input = () => {
  return (
    <div className='input-wrapper'>
        <input placeholder='Send a Message...'/>
        <span className='curso cursor-pointer'>
          <SearchIcon/>
        </span>
    </div>
  )
}

export default Input