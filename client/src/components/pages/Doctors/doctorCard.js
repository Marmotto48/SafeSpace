import React, { useEffect } from "react";
import "./doctorCard.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getDocs } from "../../../redux/userSlice";

const DoctorCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDocs());
  }, [dispatch]);
  const user = useSelector((state) => state.user);

  return (
    <div className='doc-cards-container'>
      {user.users &&
        user.users.map((user) => {
          return (
            <div className="flip-card" key={user._id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={user.avatar.imageURL}
                    alt="Avatar"
                    id="card-avatar"
                  />
                  <h5>{user.fullname}</h5>
                  <p>{user.clinic}</p>
                </div>
                <div className="flip-card-back">
                  <div>
                    <img
                      src={user.avatar.imageURL}
                      alt="Avatar"
                      id="card-inner-avatar"
                    />
                    <div className="card-descrip">
                      <span>
                        <h6>{user.fullname}</h6>
                        <br />
                        <h6>{user.clinic}</h6>
                      </span>
                      <span>
                        <BsFillChatDotsFill className="card-icons" />
                        <RiMailSendLine className="card-icons" />
                      </span>
                    </div>
                  </div>
                  <p>
                    "Lemon drops sugar plum wafer candy canes sesame snaps.
                    Tiramisu cake apple pie marzipan pie chocolate sweet bear
                    claw. Gummi bears brownie cookie."
                  </p>
                  <div calss="card-contact" id="card-contact">
                    <FaPhoneAlt />
                    <span>{user.phone}</span>
                    <HiMail />
                    <span>{user.email}</span>
                    <FaMapMarkerAlt />
                    <span>{user.adress}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DoctorCard;
