import React from "react";
import "./style.scss";

const Feature = ({ list }) => {
  return (
    <div className="features">
      {list &&
        list.map((feature, index) => {
          return (
            <div className="feature-item" key={index + feature.title}>
              <img
                src={feature.src}
                alt={feature.alt}
                className="feature-icon"
              />
              <h3 className="feature-item-title">{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Feature;