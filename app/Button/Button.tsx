import React, { ReactNode } from "react";
import "./Button.scss";

interface IButton {
  title?: string;
  prefixIcon?: ReactNode;
  sufixIcon?: ReactNode;
  subTitle?: string;
  otherClass?: string;
  mouseEnter?: ()=> void;
  mouseLeave?: () => void;
  disabled?: boolean
}

const Button = ({
  title,
  prefixIcon,
  sufixIcon,
  subTitle,
  otherClass,
  mouseEnter,
  mouseLeave,
  disabled
}: IButton) => {
  return (
    <button className={`button  w-fit ${otherClass}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} disabled = {disabled}>
      {prefixIcon && prefixIcon}
      <div className="flex-col flex">
       {title && <p className="text-left">{title}</p>}
       {subTitle && <p className="text-left font-normal text-sm">{subTitle}</p>}
      </div>
      {sufixIcon && sufixIcon}
    </button>
  );
};

export default Button;

