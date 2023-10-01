import React from 'react'
import './Input.scss'
import SearchIcon from '../Vectors/Search'

const Input = ({placeHolder, ...others}:{placeHolder:string}) => {
  return (
    <div className='input-wrapper'>
        <input placeholder={placeHolder} {...others}/>
        <span className='curso cursor-pointer'>
          <SearchIcon/>
        </span>
    </div>
  )
}

export default Input