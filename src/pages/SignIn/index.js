import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import LoginBox from "../../components/LoginBox";
import "./style.scss";

const SignIn = () => {
  return (
    <>
      <Header />
      <main className="bg-dark">
        <div className="loginBoxContainer">
          <LoginBox />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
