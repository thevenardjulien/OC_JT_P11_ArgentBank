import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Button from "../../components/Button";
import Account from "../../components/Account";
import "./style.scss";

const User = () => {
  const userAccounts = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.790",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

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
        <h2 class="sr-only">Accounts</h2>
        <Account accounts={userAccounts} />
      </main>
      <Footer />
    </>
  );
};

export default User;
