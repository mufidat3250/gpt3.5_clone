"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import Battery from "../Vectors/Battery";
import Star from "../Vectors/Star";
import Lock from "../Vectors/Lock";
import "./Content.scss";
import QuestionMark from "../Vectors/QuestionMark";
import Input from "../Input/page";
import Models from "../Models/Modal";
import { gpt3_5Model } from "../data";
import { gpt4Model } from "../data";

const Content = () => {
    const [isGPT_3, setGPT_3] = useState(false)
    const [isGPT_4, setGPT_4] = useState(false)
  return (
    <div className="content-container">
      <div>
        <div className="relative w-fit mx-auto">
        <div className="content-wrapper">
          <div className="w-[10rem]">
            <Button
              title="GPT-3.5"
              prefixIcon={<Battery />}
              mouseEnter={()=> setGPT_3(true)}
              mouseLeave= {()=> setGPT_3(false)}
              otherClass="bg-white !text-black justify-center"
            />
          </div>
          <div className="w-[10rem]">
            <Button
              title="GPT-4"
              prefixIcon={<Star />}
              sufixIcon={<Lock />}
            //   mouseEnter = {()=>setGPT_4(true)}
            //   mouseLeave = {()=> setGPT_4(false)}
              otherClass="justify-center !text-[#908ba1]"
            />
          </div>         
        </div>
        {isGPT_3 && <div className="absolute">
            <Models button={false} title={gpt3_5Model.title} desc={gpt3_5Model.desc}/>
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
            otherClass="justify-start border-[1px] !text-[#413e50]"
          />
          <Button
            title="Show me a code snippet"
            subTitle="of a website sticky header"
            otherClass="justify-start border-[1px] !text-[#413e50]"
          />
          <Button
            title="Plan a trip"
            subTitle="of a website sticky header"
            otherClass="justify-start border-[1px] !text-[#413e50]"
          />
          <Button
            title="Tell me a fun fact"
            subTitle="about the roman empire"
            otherClass="justify-start border-[1px] !text-[#413e50]"
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
          <div className="">
            <div className="question-mark">
              <QuestionMark />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Content;
