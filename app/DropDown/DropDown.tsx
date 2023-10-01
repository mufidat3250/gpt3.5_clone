import React from 'react'
import CustomInstruction from '../Vectors/CustomInstrucionIcon'
import LogOut from '../Vectors/LogOut'
import Settings from '../Vectors/Settings'
import Icon from '../Vectors/TabClose'

const DropDown = ({openDropDown, closeDropDown}:{openDropDown:boolean, closeDropDown:Function}) => {
    let dropDownContent = [{icon:<CustomInstruction/> , text:'Custom Instructions'}, {icon: <Settings/>, text:'Settings'}, {icon:<LogOut/>, text:'LogOut'}]
  return (
    <div onClick={()=>closeDropDown()}>
        {dropDownContent.map((dropdown)=> <div>
            <div>
                {dropdown.icon}
                <p>{dropdown.text}</p>
            </div>
        </div>)}
    </div>
  )
}

export default DropDown