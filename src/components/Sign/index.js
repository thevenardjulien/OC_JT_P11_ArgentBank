import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { connectedUser } from "../../features/user/userSlice";

const SignInLink = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(connectedUser(""));
    localStorage.removeItem("token");
  };
  return (
    <div className="sign-in">
      {user.length !== "" && <p>{user}</p>}
      <FontAwesomeIcon icon={faCircleUser} />
      {user === "" ? (
        <p>Sign In</p>
      ) : (
        <p onClick={() => handleSignOut()}>Sign Out</p>
      )}
    </div>
  );
};

export default SignInLink;
