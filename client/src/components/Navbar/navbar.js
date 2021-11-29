import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/userSlice";

import { FaBars } from "react-icons/fa";
//LINK STYLE
const linkStyle = {
  textDecoration: "inherit",
};

export const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  return (
    <div className="navbar">
      <div className="wrapper">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label htmlFor="show-menu" className="menu-icon">
            <FaBars />
          </label>
          <div className="content">
            <div className="logo">
              {/* <img id="hp-logo" src={logo} alt="" /> */}
              {/* <h6>Safe Space</h6> */}
              <div className="logo-holder logo-4">
                <Link to={{ pathname: "/" }}>
                  <h3>Safe</h3>
                  <p>Space</p>
                </Link>
              </div>
            </div>
            <ul className="links">
              <li>
                <Link to={{ pathname: "/" }}>Home</Link>
              </li>
              <li>
                <Link to={{ pathname: "/about" }}>About</Link>
              </li>
              <li>
                <Link to={{ pathname: "/doctors" }}>Doctors</Link>
              </li>
              <li>
                <Link to={{ pathname: "/blog" }}>Blog</Link>
                <input type="checkbox" id="show-features" />
                <label htmlFor="show-features">Blog</label>
                <ul className="drp-menu">
                  <li>
                    <Link to={{ pathname: "/blog/newPost" }}> Add Post </Link>
                  </li>
                  <li>
                    <Link to={{ pathname: "/blog/public" }} style={linkStyle}>
                      Public Posts
                    </Link>
                  </li>
                  <li>
                    <Link to={{ pathname: "/blog/private" }}>
                      Private Posts
                    </Link>
                  </li>
                  <li>
                    {/* {user.isAuth && (
                      <Link to={{ pathname: `test/${user.userInfo._id}` }}>
                        Test
                      </Link>
                    )} */}
                  </li>
                </ul>
              </li>
              {/* PROFILE */}
              {user.isAuth ? (
                <li>
                  {!user.userInfo.isAdmin ? (
                    <>
                      <Link
                        to={`profile/${user.userInfo._id}`}
                        className="desktop-link"
                      >
                        <img
                          id="profile-avatar-hp"
                          src={user.userInfo.avatar.imageURL}
                          alt=""
                        />
                      </Link>
                      <input type="checkbox" id="show-services" />
                      <label htmlFor="show-services">Profile</label>
                      <ul className="drp-menu">
                        <Link to={`profile/${user.userInfo._id}`}>Profile</Link>
                        <li
                          onClick={() => {
                            dispatch(logout());
                            history.push("/");
                          }}
                        >
                          <Link to={{ pathname: "/" }}> Logout </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link to={{ pathname: "/admindashboard" }}>
                        {" "}
                        Dashboard{" "}
                      </Link>
                    </>
                  )}
                </li>
              ) : (
                // ) : patients.isAuth && !doctors.isAuth ? (
                //   <li>
                //     <Link
                //       // to={`/patient/${patients.userInfo.name}${patients.userInfo.lastName}`}
                //       to={`/patient/profile`}
                //       className="desktop-link"
                //     >
                //       <img
                //         id="profile-avatar-hp"
                //         src={patients.userInfo.avatar}
                //         alt=""
                //       />
                //     </Link>
                //     <input type="checkbox" id="show-services" />
                //     <label htmlFor="show-services">Profile</label>
                //     <ul className="profile-drpd">
                //       <Link
                //         // to={`/patient/${patients.userInfo.name}${patients.userInfo.lastName}`}
                //         to={`/patient/profile`}
                //         style={linkStyle}
                //       >
                //         Profile
                //       </Link>
                //       <li
                //         onClick={() => {
                //           dispatch(logout());
                //           history.push("/");
                //         }}
                //       >
                //         <a href="##"> Logout </a>
                //       </li>
                //     </ul>
                //   </li>
                <li>
                  <input type="checkbox" id="show-services" />
                  <label htmlFor="show-services">Login / Register</label>
                  <Link to="/login">Login / Register</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
