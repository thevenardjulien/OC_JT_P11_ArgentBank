import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import SignInLink from "../SignInLink";
import "./style.scss";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <Logo width="200px" />
      </NavLink>
      <NavLink to="/sign-in" className="main-nav-item">
        <SignInLink />
      </NavLink>
    </nav>
  );
};

export default MainNav;
