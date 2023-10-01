'use client';
import React, { useState } from "react";
import Button from "../Button/Button";
import PlusIcon from "../Vectors/PlusIcon";
import TabClose from "../Vectors/TabClose";
import UserIcon from "../Vectors/User";
import "./sideNav.scss";
import { data } from "../data";
import Chat from "../Chat/Chat";
import { closeModal, modalEntity } from "../ModalEntity/Modalentity";
import Input from "../Input/page";
import CloseIcon from "../Vectors/CloseIcon";

const SideNav = () => {
    const [searchButton, setSearch] = useState(false)
    const {openModal} = modalEntity.use()
    const [searchInput, setSearchInput] = useState('')
    
    const filteredData = Object.values(data)
    
    console.log(filteredData, data)
  return (
    <div className="sidenav-wrapper">
      <div className="sidenav-container">
        <div className="sideNav-head">
          <div className="newChat">
            <Button prefixIcon={<PlusIcon />} title="New Chat" otherClass="justify-start h-[56px] border-[1px] border-[#4d4d4f]"/>
          </div>
          <div className="closeTab" onClick={()=>setSearch(true)}>
            <Button prefixIcon={<TabClose />} otherClass='justify-center h-[56px] border-[1px] border-[#4d4d4f]'/>
          </div>
          <div className={`flex fixed items-center justify-between gap-8 bg-[#202123] -mt-[5rem] transition-all ease-in-out ${searchButton && 'mt-0'}`}>
          <div className=" flex-1">
            <Input placeHolder="Search For chat..." onChange={(e:any)=> setSearchInput(e.target.value)} />
          </div>
          <CloseIcon className="flex-1 cursor-pointer" onClick={()=> setSearch(false)}/>
          </div>
        </div>
        <div className="date">Date</div>
      </div>
      <div className="side-nav-content">
        {data.map((data) => {
          return (
            <div>
              <h3 className="font-bold">{`${data.date.charAt(0).toLocaleUpperCase()}${data.date.slice(1)}`}</h3>
              {data.chatList.map((item) => (
                <Chat desc={item.desc} date={item.date} />
              ))}
            </div>
          );
        })}
      </div>
      <footer className="side-nav-footer">
        <div className="upgrade" onClick={()=> closeModal(true)}>
          <UserIcon />
          <p>Upgrade to Plus</p>
        </div>
        <div className="loggedIn-user">
          <div className="flex justify-start items-center gap-2">
            <div className="user-image"> W</div>
            <p>Wahab Mufidat</p>
          </div>
          <div>
            <div className="flex gap-1">
              <p className="w-1 h-1 rounded-full bg-[#9e9ca6]"></p>
              <p className="w-1 h-1 rounded-full bg-[#9e9ca6]"></p>
              <p className="w-1 h-1 rounded-full bg-[#9e9ca6]"></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SideNav;
