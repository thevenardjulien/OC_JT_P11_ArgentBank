import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import SignIn from "../SignIn";
import "./style.scss";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <Logo width="200px" />
        <h1 class="sr-only">Argent Bank</h1>
      </NavLink>
      <NavLink to="/sign-in" className="main-nav-item">
        <SignIn />
      </NavLink>
    </nav>
  );
};

export default MainNav;
