import React from "react";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import "./style.scss";

const Main = () => {
  return (
    <div className="main">
      <Hero />
      <Features />
    </div>
  );
};

export default Main;
