import React from 'react'
import Button from '../Button/Button'
import PlusIcon from '../Vectors/PlusIcon'
import TabClose from '../Vectors/TabClose'
import UserIcon from '../Vectors/User'
import './sideNav.scss'

const SideNav = () => {
  return (
    <div className='sidenav-wrapper'>
      <div className='sidenav-container'>
      <div className='sideNav-head'>
      <div className='newChat'>
      <Button prefixIcon={<PlusIcon/>} title='New Chat'/>
      </div>
      <div className='closeTab'>
        <Button prefixIcon={<TabClose/>}/>
      </div>
    </div>
    <div className='date'>Date</div>
      </div>
    <div className='side-nav-content'>
      
    </div>
    <footer className='side-nav-footer'>
      <div className='upgrade'>
        <UserIcon/>
        <p>Upgrade to Plus</p>
      </div>
      <div className='loggedIn-user'>
        <div className='flex justify-start items-center gap-2'>
        <div className='user-image'> W</div>
        <p>Wahab Mufidat</p>
        </div>
        <div>
        <div className='flex gap-1'>
        <p className='w-1 h-1 rounded-full bg-[#9e9ca6]'></p>
          <p className='w-1 h-1 rounded-full bg-[#9e9ca6]'></p>
          <p className='w-1 h-1 rounded-full bg-[#9e9ca6]'></p>
        </div>
        </div>
        
      </div>
    </footer>
    </div>
  )
}

export default SideNav