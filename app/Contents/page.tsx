"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import Battery from "../Vectors/Battery";
import Star from "../Vectors/Star";
import Lock from "../Vectors/Lock";
import "./Content.scss";
import QuestionMark from "../Vectors/QuestionMark";
import Input from "../Input/page";
import Models from "../Models/Models";
import { gpt3_5Model } from "../data";
import { gpt4Model } from "../data";
import SearchIcon from "../Vectors/Search";
import UpgradeModal from "../UpgradeModal/UpgradeModal";
import { closeModal, modalEntity} from "../ModalEntity/Modalentity";


const Content = () => {
    const [isGPT_3, setGPT_3] = useState(false)
    const [isGPT_4, setGPT_4] = useState(false)
    const [isButtonHovered_one, setIsButtonHovered_one] = useState(false)
    const [isButtonHovered_two, setIsButtonHovered_two] = useState(false)
    const [isButtonHovered_three, setIsButtonHovered_three] = useState(false)
    const [isButtonHovered_four, setIsButtonHovered_four] = useState(false)
    const [modal, setModal] = useState(false)
    // const [openModal, setOpenModal] = useState(false)
    const {openModal} = modalEntity.use()
    console.log(openModal)
  return (
    <div>
       <div className="content-container">
      <div>
        <div className="relative w-fit mx-auto">
        <div className="content-wrapper">
          <div className="w-[11rem]">
            <Button
              title="GPT-3.5"
              prefixIcon={<Battery />}
              mouseEnter={()=> setGPT_3(true)}
              mouseLeave= {()=> setGPT_3(false)}
              otherClass="bg-white !text-black justify-center"
            />
          </div>
          <div className="w-[11rem]">
            <Button
              title="GPT-4"
              prefixIcon={<Star color={isGPT_4 ? '#f328e5':''} />}
              sufixIcon={<Lock />}
              mouseEnter = {()=>setGPT_4(true)}
              mouseLeave = {()=> setGPT_4(false)}
              otherClass="justify-center !text-[#908ba1] hover:!text-black"
            />
          </div>         
        </div>
        {isGPT_3 && <div className="absolute">
            <Models  title={gpt3_5Model.title} desc={gpt3_5Model.desc}/>
            </div>}
          {
            isGPT_4 && <div className="absolute">
                <Models title={gpt4Model.title} desc={gpt4Model.desc} subDesc={gpt4Model.subDesc} button />
            </div>
          }
        </div>
        <h1>ChatGPT</h1>
      </div>
      <div className="input-section-wrapper">
        <div className="input-section">
          <Button
            title="Design a Database Schema"
            subTitle="for an online merch store"
            otherClass={`justify-start border-[1px] !text-[#413e50] ${isButtonHovered_one && 'justify-between bg-gray-100'}`}
            mouseEnter={()=> setIsButtonHovered_one(true)}
            mouseLeave = {()=> setIsButtonHovered_one(false)}
            sufixIcon={isButtonHovered_one&& <SearchIcon color={isButtonHovered_one && "#666270"}/>}
          />
          <Button
            title="Show me a code snippet"
            subTitle="of a website sticky header"
            otherClass={`justify-start border-[1px] !text-[#413e50] ${isButtonHovered_two && 'justify-between bg-gray-100'}`}
            mouseEnter={()=> setIsButtonHovered_two(true)}
            mouseLeave = {()=> setIsButtonHovered_two(false)}
            sufixIcon={isButtonHovered_two && <SearchIcon color={isButtonHovered_two && "#666270"}/>}
            

          />
          <Button
            title="Plan a trip"
            subTitle="of a website sticky header"
            otherClass={`justify-start border-[1px] !text-[#413e50] ${isButtonHovered_three && 'justify-between bg-gray-100'}`}
            mouseEnter={()=> setIsButtonHovered_three(true)}
            mouseLeave = {()=> setIsButtonHovered_three(false)}
            
            sufixIcon={isButtonHovered_three && <SearchIcon color={isButtonHovered_three && "#666270"}/>}

          />
          <Button
            title="Tell me a fun fact"
            subTitle="about the roman empire"
            otherClass={`justify-start border-[1px] !text-[#413e50] ${isButtonHovered_four && 'justify-between bg-gray-100'}`}
            mouseEnter={()=> setIsButtonHovered_four(true)}
            mouseLeave = {()=> setIsButtonHovered_four(false)}
            sufixIcon={isButtonHovered_four && <SearchIcon color={isButtonHovered_four && "#666270"}/>}

          />
          <div className="col-span-2 pt-2">
            <Input />
          </div>
        </div>
        <footer>
          <p></p>
          <p>
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts. <span className="underline">ChatGPT September 25 Version</span>
          </p>
          <button onClick={()=> setModal(true)}>i want to open modal</button>
          <div className="">
            <div className="question-mark">
              <QuestionMark />
            </div>
          </div>
        </footer>
      </div>
    </div>
        <UpgradeModal openModal={openModal} seOpenModal={closeModal}/>
    </div>
  );
};

export default Content;
