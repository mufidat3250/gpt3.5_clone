import React, { ReactNode } from 'react'
import './Button.scss'

interface IButton {
    title?:string;
    prefixIcon?: ReactNode;
    sufixIcon?: ReactNode;
    subTitle?:string;
}

const Button = ({title, prefixIcon, sufixIcon, subTitle}:IButton) => {
  return (
    <button className={`button  ${!title ? ' justify-center':'justify-start'}`}>
      {prefixIcon && prefixIcon}
      {title && <p className='m m-0 p-0'>{title}</p>}
      {subTitle && <span>{subTitle}</span>}
      {sufixIcon && sufixIcon}
    </button>
  )
}

export default Button