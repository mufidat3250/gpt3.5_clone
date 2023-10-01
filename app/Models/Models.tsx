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
    <div className=' p-8  border-[1px] mt-4 rounded-md bg-white shadow-md flex flex-col gap-4'>
        <h2 className='font-bold text-xl'>{title && title}</h2>
        <p className='text-[#908ba1] text-base'>{desc && desc}</p>
        {subDesc && <p className='text-[#908ba1] text-base'>{subDesc}</p>}
        {button && <Button title='Upgrade to chat GPT Plus' otherClass='bg-purple-500 justify-center h-[56px]'/>}
    </div>
  )
}

export default Models