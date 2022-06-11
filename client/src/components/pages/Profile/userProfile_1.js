import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUser,
  updateUser,
  avatarUpdate,
} from "../../../redux/userSlice";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit, FaCheck } from "react-icons/fa";
import SuccessSnackBar from "../../MUI/Snackbar";
import DeleteComfirmation from "../../MUI/Dialog";
import { ProfileAccordions } from "../../MUI/Accordion";

const UserProfile_1 = ({ history }) => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (user.userInfo._id !== id || !user.isAuth) {
      history.push("/login");
    } else {
      dispatch(getUser(id));
      console.log(id);
    }
  }, [dispatch, user.userInfo._id, history, id, user.isAuth]);

  ////////////////////User///////////////////////
  //update
  const [updatedInfo, setUpdatedInfo] = useState();
  const handleUpdate = (e) => {
    setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value });
  };
  const handleUpdateSubmit = (e, userId) => {
    e.preventDefault();
    dispatch(updateUser({ id: id, data: updatedInfo }));
  };
  //update avatar
  const handleUpdateImage = (e, userId) => {
    dispatch(avatarUpdate({ id: userId, file: e.target.files[0] }));
  };

  // delete user
  const handleDeleteUser = () => {
    dispatch(deleteUser({ id: user.userInfo._id }));
  };
  const linkStyle = {
    textDecoration: "inherit",
  };
  //---------------------------------------Alert success
  const [openSnack, setOpenSnack] = useState(false);
  const openSuccSnack = () => {
    setOpenSnack(true);
  };
  //------------------------------
  const [openDeleteComfirm, setOpenDeleteComfirm] = useState(false);
  const handleOpenDeleteComfirm = () => {
    setOpenDeleteComfirm(true);
  };
  return (
    <>
      <div className="profile">
        <div className="main">
          <div className="glass">
            <div className="dashboard">
              <div className="user">
                <img
                  id="profile-avatar-profile"
                  src={user.userInfo.avatar.imageURL}
                  alt=""
                />
                <h3>{user.user.fullname}</h3>
                <p>{user.user.role}</p>
                <input
                  type="file"
                  name="avatar"
                  onChange={(e) => handleUpdateImage(e, user.user._id)}
                  style={{ fontSize: "12px" }}
                  className="upload"
                />
                <span>Edit Avatar</span>
              </div>
              <div className="seperator"></div>
              <div className="links">
                <div className="link">
                  <BsFileEarmarkPlus />
                  <label className="tab-label" htmlFor="rd1">
                    See your posts here{" "}
                  </label>
                </div>
                <div className="link">
                  <BiCommentDetail />
                  <label className="tab-label" htmlFor="rd2">
                    See your comments{" "}
                  </label>
                </div>
                <div className="link">
                  <AiFillLike />
                  <label className="tab-label" htmlFor="rd4">
                    see your likes here{" "}
                  </label>
                </div>
                <div className="link">
                  <GoTasklist />
                  <label className="tab-label" htmlFor="rd5">
                    See your Todo List{" "}
                  </label>
                </div>
              </div>
              <Link to={{ pathname: "/blog/newPost" }} style={linkStyle}>
                <div className="pro">
                  <h2>Write with us</h2>
                  <img
                    src="https://static.thenounproject.com/png/214735-200.png"
                    alt=""
                  />
                </div>
              </Link>
              <div className="seperator"></div>
              <button
                className="delete-btn"
                onClick={handleOpenDeleteComfirm}

                // onClick={(e) => {
                //   handleDeleteUser(e, user.user._id);
                // }}
              >
                Delete Account
              </button>
              <DeleteComfirmation
                openDeleteComfirm={openDeleteComfirm}
                setOpenDeleteComfirm={setOpenDeleteComfirm}
                confirmTextHeader="Delete Account "
                confirmText="Are you sure you want to delete your account ? Deleting your account you will lose..."
                handleDeleteUser={handleDeleteUser}
              />
            </div>
            {/* SECTION 2 */}
            <div className="user-info">
              <h1>Edit informations</h1>
              <div className="profile-cards">
                <div className="profile-card">
                  <p>User Name</p>

                  <input
                    name="fullname"
                    type="text"
                    defaultValue={user.user.fullname}
                    onChange={handleUpdate}
                  />
                </div>

                <div className="profile-card">
                  <p>Email</p>
                  <input
                    name="email"
                    type="text"
                    readOnly
                    defaultValue={user.user.email}
                  />
                </div>
                <div className="profile-card">
                  <p>Age</p>

                  <input
                    type="text"
                    onChange={handleUpdate}
                    name="dateOfBirth"
                    defaultValue={user.user.dateOfBirth}
                  />
                </div>
                <div className="profile-card">
                  <p className="gender">Gender</p>
                  <p className="gender">{user.user.gender}</p>
                  <select
                    name="gender"
                    defaultValue={user.user.gender}
                    onChange={handleUpdate}
                  >
                    <option value="">Change...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="profile-card">
                  <p>Clinic</p>
                  <input
                    type="text"
                    defaultValue={user.user.clinic}
                    onChange={handleUpdate}
                    name="clinic"
                  />
                </div>
                <div className="profile-card">
                  <p>Phone Number</p>
                  <input
                    type="text"
                    defaultValue={user.user.phone}
                    name="phone"
                    onChange={handleUpdate}
                  />
                </div>
                <div className="profile-card">
                  <p>Address</p>
                  <input
                    type="text"
                    defaultValue={user.user.clinicAddress}
                    name="clinicAddress"
                    onChange={handleUpdate}
                  />
                </div>
                {/* <div className="profile-card">
                  <p>Bio</p>
                  <input
                    name="bio"
                    type="text"
                    defaultValue={user.user.bio}
                    onChange={handleUpdate}
                  />
                </div> */}
              </div>
              <button
                className="submit-btn"
                style={{ width: "160px", margin: "0px auto 15px auto" }}
                onClick={(e) => {
                  handleUpdateSubmit(e, user.user._id);
                  openSuccSnack();
                }}
              >
                Save Changes
              </button>
            </div>
          </div>

          {/* {{/select}} */}
          {/* sectio 2  */}
          <div className="glass-2">
            <ProfileAccordions />
          </div>
        </div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <SuccessSnackBar
          setOpenSnack={setOpenSnack}
          openSnack={openSnack}
          error={user.error}
          text="Profile information updated succesfully !"
        />
      </div>
    </>
  );
};

export default withRouter(UserProfile_1);
