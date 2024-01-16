import React from "react";
import "./style.scss";

const Features = () => {
  const featuresList = [
    {
      src: "/images/icon-chat.png",
      alt: "Chat Icon",
      title: "You are our #1 priority",
      text: `Need to talk to a representative? You can get in touch through our 24/7
                chat or through a phone call in less than 5 minutes.`,
    },
    {
      src: "/images/icon-money.png",
      alt: "Money Icon",
      title: "More savings means higher rates",
      text: `The more you save with us, the higher your interest rate will be!`,
    },
    {
      src: "/images/icon-security.png",
      alt: "Security Icon",
      title: "Security you can trust",
      text: `We use top of the line encryption to make sure your data and money
      is always safe.`,
    },
  ];

  return (
    <div className="features">
      {featuresList.map((feature, index) => {
        return (
          <div class="feature-item" key={index}>
            <img src={feature.src} alt={feature.alt} class="feature-icon" />
            <h3 class="feature-item-title">{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
