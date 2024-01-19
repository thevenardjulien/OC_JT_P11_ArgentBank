import React from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import "./style.scss";

const ProfileLink = () => {
  const user = useSelector((state) => state.user.value);
  const userEmail = useSelector((state) => state.user.value[0]);
  const userName = useSelector((state) => state.user.value[2]);

  return (
    <div className="profileLink">
      {user !== "" && <FontAwesomeIcon icon={faCircleUser} />}
      {user !== "" && <p>{userName ? userName : userEmail}</p>}
    </div>
  );
};

export default ProfileLink;
