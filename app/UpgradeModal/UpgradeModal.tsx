import React from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import Check from '../Vectors/Check'


const freeCoursePackage = ['Access to our GPT-3.5 model', 'Standard Response speed', 'Regular model updates']
const paidCourse = ['Access to GPT-4, Our most capable model', 'Fast response speed', 'Exclusive access to features like Plugins and Advanced Data Analysis']

const UpgradeModal = ({openModal, seOpenModal}:{openModal:boolean, seOpenModal:Function}) => {
  return (
    <div>
        <Modal openModal={openModal} closeModal={()=>seOpenModal(false)} title='Your Plan'>
        <div className='flex'>
        <div className='flex-1 pt-8 pl-8 pr-8  border-r-2 border-gray-400'>
            <h1 className='text-2xl font-bold mt-[0.2rem] mb-[1rem]'>Free Plan</h1>
            <div className='w-full'>
            <Button title='Your current plan' disabled otherClass='bg-gray-300 !text-gray-500 justify-center h-[56px] mb-[1rem] cursor-not-allowed' />
            <div className='gap-3 flex flex-col'>
            {freeCoursePackage.map((course)=> <div className=' flex gap-3'>
            <Check/>
                <p>{course}</p>
            </div>)}
            </div>
            </div>
        </div>
        <div className='flex-1 p-8'>
        <div>
            <div className='flex justify-between mt-[0.2rem] mb-[1rem]'>
            <h1 className='text- text-2xl font-bold'>ChatGPT Plus </h1>
            <h1 className='text-2xl font-bold'>USD $20/mo</h1>
            </div>
            <div className='w-full'>
            <Button title='Your current plan' otherClass='bg-[#0dab81] justify-center h-[56px] mb-[1rem]' />
            <div className='flex flex-col gap-3'>
            {paidCourse.map((course, id)=> <div  className=' flex gap-3' key={`course${id}`}>
            <Check color='#0dab81'/>
                <p>{course}</p>
            </div>)}
            <p className='font-[500] underline'>I need Help with a billing issue</p>
            </div>
            </div>
        </div>
        </div>
    </div>
        </Modal>
    </div>
  )
}

export default UpgradeModal