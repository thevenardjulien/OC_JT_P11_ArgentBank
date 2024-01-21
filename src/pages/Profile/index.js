import React, { useRef, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Button from "../../components/Button";
import Account from "../../components/Account";
import { userAccounts } from "../../services/datas/userAccounts";
import { useDispatch, useSelector } from "react-redux";
import { connectedUser } from "../../store/user/userSlice";
import "./style.scss";

const User = () => {
  const user = useSelector((state) => state.user.value);
  const userEmail = useSelector((state) => state.user.value.email);
  const token = useSelector((state) => state.user.value.token);
  const userName = useSelector((state) => state.user.value.name);
  const form = useRef();

  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const editBtnText = isEditing ? "Cancel" : "Edit Name";
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const name = form.current[0].value;
    dispatch(connectedUser({ ...user, name: name }));
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
                    <Button text="Confirm" />
                  </form>
                ) : userName ? (
                  userName
                ) : (
                  userEmail
                )}
              </h1>
              <div onClick={handleEdit}>
                <Button
                  text={editBtnText}
                  link="/user"
                  className="edit-button"
                />
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
