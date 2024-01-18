import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { connectedUser } from "../../store/user/userSlice";
import "./style.scss";

const SignInLink = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(connectedUser(""));
    localStorage.removeItem("token");
  };
  return (
    <div className="sign-in">
      <div className="sign-in-on">
        {user !== "" && <FontAwesomeIcon icon={faCircleUser} />}
        {user !== "" && <p>{user}</p>}
      </div>
      {user !== "" && <FontAwesomeIcon icon={faSignOut} />}
      {user === "" && <FontAwesomeIcon icon={faCircleUser} />}
      {user === "" ? (
        <p>Sign In</p>
      ) : (
        <p onClick={() => handleSignOut()}>Sign Out</p>
      )}
    </div>
  );
};

export default SignInLink;
