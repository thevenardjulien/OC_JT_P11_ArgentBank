import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { connectedUser } from "../../store/user/userSlice";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";

const SignLink = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <div className="sign-in">
      {user !== "" ? (
        <Link
          to="/"
          className="sign-link-item"
          onClick={() => dispatch(connectedUser(""))}
        >
          <FontAwesomeIcon icon={faSignOut} />
          <p>Sign Out</p>
        </Link>
      ) : (
        <NavLink to="/login" className="sign-link-item">
          <FontAwesomeIcon icon={faCircleUser} />
          <p>Sign In</p>
        </NavLink>
      )}
    </div>
  );
};

export default SignLink;
