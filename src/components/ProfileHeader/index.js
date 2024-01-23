import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectedUser } from "../../store/user/userSlice";
import { fetchEditProfile } from "../../services/fetchs/fetchProfile";
import Button from "../../components/Button";
import "./style.scss";
import UserInfos from "../UserInfos";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const userName = useSelector((state) => state.user.value.userName);
  const userToken = useSelector((state) => state.user.value.token);

  //FORM
  const form = useRef();
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const editBtnText = isEditing ? "Cancel" : "Edit Name";
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const newUserName = inputRef.current.value;
    if (newUserName.trim() !== "") {
      await fetchEditProfile(newUserName, userToken);
      setIsEditing(false);
      dispatch(connectedUser({ ...user, userName: newUserName }));
    }
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
              <UserInfos />
              <input
                ref={inputRef}
                type="text"
                placeholder="Set new user name ..."
                className="editInput"
                minLength="5"
                required
                pattern="^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$"
              />
              <button type="submit">Valider</button>
            </form>
          ) : (
            userName
          )}
        </h1>
        <div onClick={handleEdit} className="EditBtnContainer">
          <Button text={editBtnText} className="edit-button" />
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;