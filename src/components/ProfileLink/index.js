import React from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import "./style.scss";

const ProfileLink = () => {
  const user = useSelector((state) => state.user.value);
  const token = useSelector((state) => state.user.value.token);
  const userEmail = useSelector((state) => state.user.value.email);
  const userName = useSelector((state) => state.user.value.name);

  return (
    <div className="profileLink">
      {token && <FontAwesomeIcon icon={faCircleUser} />}
      {token && <p>{userName ? userName : userEmail}</p>}
    </div>
  );
};

export default ProfileLink;
