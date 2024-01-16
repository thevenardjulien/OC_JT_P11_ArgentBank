import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Button from "../../components/Button";
import "./style.scss";

const User = () => {
  return (
    <>
      <Header />
      <main className="bg-dark userContainer">
        <h1 className="userTitle">
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <Button text="Edit Name" link="/user" />
      </main>
      <Footer />
    </>
  );
};

export default User;
