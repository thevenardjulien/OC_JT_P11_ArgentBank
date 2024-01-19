import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../../services/fetchLogin";
import { useDispatch } from "react-redux";
import { connectedUser } from "../../store/user/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const LoginBox = () => {
  const form = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = form.current.username.value;
    const password = form.current.password.value;
    const response = await fetchLogin(email, password);
    const token = response.body.token;
    response && dispatch(connectedUser([email, token]));
    response && navigate("/user");
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
        </form>
      </section>
    </div>
  );
};

export default LoginBox;
