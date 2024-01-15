import React from "react";
import Logo from "../../components/Logo";
import SignIn from "../../components/SignIn";
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <Logo className="header__logo" />
      <SignIn className="header__link" />
    </div>
  );
};

export default Header;
