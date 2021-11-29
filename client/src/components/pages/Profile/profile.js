import React, { useState, useEffect } from "react";

import { useDispatch, useSelector, useStore } from "react-redux";
import { useParams } from "react-router-dom";


const Profile = () => {
    const { id } = useParams();
const user = useSelector(state => state.user)

  const dispatch = useDispatch();

  
    return (
        <div>
            {user.userInfo.id === id && 
            <>IT WORKED ?????? </>
            }
        </div>
    )
}

export default Profile
