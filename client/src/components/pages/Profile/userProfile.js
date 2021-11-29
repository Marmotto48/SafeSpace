import React from "react";
import "./profile.css";
import DocProfile from './userProfile_1'
import PatientProfile from './userProfile_2'
import { useSelector } from "react-redux";


const UserProfile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {user.userInfo.role === "Doctor" ? (
       <DocProfile/>
    ) : user.userInfo.role === "Patient" ? ( 
      <PatientProfile/>
    ) : (
    <></>
    )}
    </div>
  );
};

export default UserProfile;
