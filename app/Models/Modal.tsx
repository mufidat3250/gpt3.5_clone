import React from 'react'
import Button from '../Button/Button'
import './Models.scss'

interface IModel {
    title:string;
    desc:string;
    subDesc?: string
    button?:boolean;
}
const Models = ({button, title, desc, subDesc}:IModel) => {
  return (
    <div className='modal bg-white shadow-md'>
        <h2 className='font-bold text-xl'>{title && title}</h2>
        <p>{desc && desc}</p>
        {subDesc && <p>{subDesc}</p>}
        {button && <Button/>}
    </div>
  )
}

export default Models