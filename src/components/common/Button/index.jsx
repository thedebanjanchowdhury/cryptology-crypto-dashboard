import React from "react";
import "./style.css"

const Button = ({ text, onClick, outlined }) => {
  return <div className={outlined ? "button-outlined" : "button"}>{text}</div>;
};

export default Button;
