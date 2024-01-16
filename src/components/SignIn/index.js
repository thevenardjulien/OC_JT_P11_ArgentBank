import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const SignIn = () => {
  return (
    <div>
      <Link to="/sign-in" className="sign-in">
        <FontAwesomeIcon icon={faCircleUser} />
        <p>Sign In</p>
      </Link>
    </div>
  );
};

export default SignIn;
