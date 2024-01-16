import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import SignIn from "../SignIn";
import "./style.scss";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <Logo width="200px" />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <Link to="/sign-in" className="main-nav-item">
        <SignIn />
      </Link>
    </nav>
  );
};

export default MainNav;
