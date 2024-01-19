import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import Sign from "../SignLink";
import ProfileLink from "../ProfileLink";
import "./style.scss";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <Logo width="200px" />
      </NavLink>
      <div className="main-nav-links">
        <NavLink to="/user" className="main-nav-item">
          <ProfileLink />
        </NavLink>
        <NavLink to="/sign-in" className="main-nav-item">
          <Sign />
        </NavLink>
      </div>
    </nav>
  );
};

export default MainNav;
