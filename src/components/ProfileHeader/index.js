import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import "./style.scss";

const ProfileHeader = () => {
  const userName = useSelector((state) => state.user.value.userName);

  //FORM
  const form = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const editBtnText = isEditing ? "Cancel" : "Edit Name";
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
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
          ) : (
            userName
          )}
        </h1>
        <div onClick={handleEdit}>
          <Button text={editBtnText} className="edit-button" />
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
