import React from "react";
import Button from "../Button";
import "./style.scss";

const Account = ({ accounts }) => {
  return (
    <div>
      {accounts.map((account, index) => {
        return (
          <section className="account" key={index}>
            <div className="account-content-wrapper">
              <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">
                {account.description}
              </p>
            </div>
            <div className="account-content-wrapper cta">
              <Button
                text="View transactions"
                link="/user"
                type="transaction-button"
              />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Account;
