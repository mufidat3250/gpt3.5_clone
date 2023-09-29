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
        <p className='text-[#908ba1] text-base'>{desc && desc}</p>
        {subDesc && <p className='text-[#908ba1] text-base'>{subDesc}</p>}
        {button && <Button title='Upgrade to chat GPT Plus' otherClass='bg-purple-500 justify-center h-[56px]'/>}
    </div>
  )
}

export default Models