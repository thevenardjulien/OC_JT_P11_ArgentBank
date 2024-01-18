import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ text, link, type }) => {
  return (
    <Link to={link}>
      <button className={type}>{text}</button>
    </Link>
  );
};

export default Button;
