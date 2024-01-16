import React from "react";

const Logo = ({ width }) => {
  return (
    <div>
      <img
        src="/images/argentBankLogo.png"
        alt="argent Bank Logo"
        style={{ width: `${width}` }}
      />
    </div>
  );
};

export default Logo;
