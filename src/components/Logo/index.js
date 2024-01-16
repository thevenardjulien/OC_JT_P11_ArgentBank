import React from "react";

const Logo = (props) => {
  return (
    <div>
      <img
        src="/images/argentBankLogo.png"
        alt="argent Bank Logo"
        style={{ width: `${props.width}` }}
      />
    </div>
  );
};

export default Logo;
