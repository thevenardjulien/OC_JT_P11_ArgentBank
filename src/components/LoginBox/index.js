import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
// REDUX
import { useDispatch } from "react-redux";
import { connectedUser } from "../../store/user/userSlice";
// FONTAWESOME
import { faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// TOAST
import { toast } from "sonner";
// FETCH
import { fetchLogin } from "../../services/fetchs/fetchLogin";
import { fetchProfile } from "../../services/fetchs/fetchProfile";

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
    // FORM REPORT VALIDITY
    const userNameInput = form.current[0];
    const passwordInput = form.current[1];

    if (userNameInput.reportValidity() && passwordInput.reportValidity()) {
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
        // SET SESSION
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("lastName", lastName);
        sessionStorage.setItem("userName", userName);
        sessionStorage.setItem("token", token);
        // STORE UPDATE THEN NAVIGATE TO PROFILE
        dispatch(
          connectedUser({
            email: sessionStorage.getItem("email"),
            firstName: sessionStorage.getItem("firstName"),
            lastName: sessionStorage.getItem("lastName"),
            userName: sessionStorage.getItem("userName"),
            token: sessionStorage.getItem("token"),
          })
        );
        toast.success("Successful identification");
        navigate("/profile");
      }
    }
    setError(true);
  };

  return (
    <div>
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form ref={form} onSubmit={(e) => handleLogin(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              minLength="4"
              maxLength="30"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" minLength="8" required />
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
