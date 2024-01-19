import React, { useRef, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Button from "../../components/Button";
import Account from "../../components/Account";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { connectedUser } from "../../store/user/userSlice";

const User = () => {
  const user = useSelector((state) => state.user.value[0]);
  const token = useSelector((state) => state.user.value[1]);
  const userName = useSelector((state) => state.user.value[2]);
  const dispatch = useDispatch();
  const userAccounts = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
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
  const [isEditing, setIsEditing] = useState(false);
  const form = useRef();
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const editBtnText = isEditing ? "Cancel" : "Edit Name";
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const name = form.current[0].value;
    dispatch(connectedUser([user, token, name]));
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <main className="bg-dark userContainer">
        {token && (
          <>
            <div className="userHeader">
              <h1 className="userTitle">
                Welcome back
                <br />
                {isEditing ? (
                  <form
                    ref={form}
                    onSubmit={(e) => handleSubmitForm(e)}
                    className="editNameForm"
                  >
                    <input type="text" />
                    <button>Valider</button>
                  </form>
                ) : userName !== "" ? (
                  userName
                ) : (
                  user
                )}
              </h1>
              <div onClick={handleEdit}>
                <Button text={editBtnText} link="/user" type="edit-button" />
              </div>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account accounts={userAccounts} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default User;
