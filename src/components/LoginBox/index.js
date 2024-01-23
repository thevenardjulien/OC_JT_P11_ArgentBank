import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// REDUX
import { useDispatch } from "react-redux";
import { connectedUser } from "../../store/user/userSlice";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { fetchLogin } from "../../services/fetchs/fetchLogin";
import { fetchProfile } from "../../services/fetchs/fetchProfile";
import "./style.scss";

const LoginBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useRef();

  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // GET FORM VALUES
    const email = form.current.username.value;
    const password = form.current.password.value;
    // FETCH LOGIN & GET RESPONSE
    const responseLogin = await fetchLogin(email, password);
    if (responseLogin && responseLogin.status === 200) {
      // IF LOGIN OK => GET TOKEN THEN FETCH PROFILE
      const token = responseLogin.body.token;
      const responseProfile = await fetchProfile(token);
      // GET PROFILE INFOS
      const firstName = responseProfile.body.firstName;
      const lastName = responseProfile.body.lastName;
      const userName = responseProfile.body.userName;
      // STORE UPDATE THEN NAVIGATE TO PROFILE
      dispatch(
        connectedUser({
          email: email,
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          token: token,
        })
      );
      navigate("/profile");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form ref={form} onSubmit={(e) => handleLogin(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          {error && (
            <div className="error">
              <FontAwesomeIcon icon={faBell} />
              <p>Username/password invalid.</p>
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default LoginBox;
