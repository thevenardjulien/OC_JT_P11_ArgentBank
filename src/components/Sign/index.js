import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { useSelector } from "react-redux";

const SignInLink = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="sign-in">
      {user.length !== "" && <p>{user}</p>}
      <FontAwesomeIcon icon={faCircleUser} />
      {user === "" ? <p>Sign In</p> : <p>Sign Out</p>}
    </div>
  );
};

export default SignInLink;
