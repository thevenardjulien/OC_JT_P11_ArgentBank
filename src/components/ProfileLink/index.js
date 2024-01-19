import React from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import "./style.scss";

const ProfileLink = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div className="profileLink">
      {user !== "" && <FontAwesomeIcon icon={faCircleUser} />}
      {user !== "" && <p>{user}</p>}
    </div>
  );
};

export default ProfileLink;
