import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const UserInfos = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <table className="userInfosTable">
      <thead>
        <tr>
          <th colSpan="2">Personal informations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Email :</td>
          <td>{user.email}</td>
        </tr>
        <tr>
          <td>First Name :</td>
          <td>{user.firstName}</td>
        </tr>
        <tr>
          <td>Last Name :</td>
          <td>{user.lastName}</td>
        </tr>
        <tr>
          <td>User Name :</td>
          <td>{user.userName}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserInfos;
