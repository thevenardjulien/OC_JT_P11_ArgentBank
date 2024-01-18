import React from "react";

const Logo = ({ width }) => {
  return (
    <img
      src="/images/argentBankLogo.png"
      alt="argent Bank Logo"
      style={{ width: `${width}` }}
    />
  );
};

export default Logo;
