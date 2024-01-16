import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const SignIn = () => {
  return (
    <div className="sign-in">
      <FontAwesomeIcon icon={faCircleUser} />
      <p>Sign In</p>
    </div>
  );
};

export default SignIn;
