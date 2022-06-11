import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout, getUser } from "../../redux/userSlice";
import { BsFillChatDotsFill } from "react-icons/bs";


export const NavbarUser = () => {
  const [loadClient, setLoadClient] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser(user.userInfo._id));
  }, [dispatch, user.userInfo._id]);
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <div className="sect-1">
          <Link to={{ pathname: "/" }}>
            <h3>Safe</h3>
            <p>Space</p>
          </Link>
        </div>
        <div className="sect-2">
          <Link to={{ pathname: "/" }}>Home</Link>
          <Link to={{ pathname: "/about" }}>About</Link>
          <Link to={{ pathname: "/doctors" }}>Doctors</Link>
          {user.user && (
            <>
              {user.user.role === "Doctor" ? (
                <>
                  <div className="dropdown">
                    <button className="dropbtn">
                      <Link className="dropbtn" to={{ pathname: "/blog" }}>
                        Blog
                      </Link>
                    </button>
                    <div className="dropdown-content">
                      <Link to={{ pathname: "/blog/newpost" }}> Add Post </Link>
                      <Link to={{ pathname: "/blog/public" }}>
                        Public Posts
                      </Link>{" "}
                      <Link to={{ pathname: "/blog/private" }}>
                        Private Posts
                      </Link>
                    </div>
                  </div>
                  <Link
                    onClick={() => setLoadClient((prevState) => !prevState)}
                    to={{ pathname: "/chatroom" }}
                  >
                    <BsFillChatDotsFill
                      style={{
                        fontSize: "25px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                  <div className="dropdown">
                    <button className="dropbtn">
                      <img src={user.user.avatar.imageURL} alt="" />
                    </button>
                    <div className="dropdown-content">
                      <Link
                        to={`profile/${user.user._id}`}
                        className="desktop-link"
                      >
                        Profile
                      </Link>
                      <Link
                        to=""
                        onClick={() => {
                          dispatch(logout());
                          history.push("/");
                        }}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </>
              ) : user.user.role === "Patient" ? (
                <>
                  <div className="dropdown">
                    <button className="dropbtn">
                      <Link className="dropbtn" to={{ pathname: "/blog" }}>
                        Blog
                      </Link>
                    </button>
                    <div className="dropdown-content">
                      <Link to={{ pathname: "/blog/newpost" }}> Add Post </Link>
                      <Link to={{ pathname: "/blog/public" }}>
                        Public Posts
                      </Link>{" "}
                    </div>
                  </div>

                  <BsFillChatDotsFill
                    style={{ fontSize: "20px", color: "black" }}
                  />

                  <div className="dropdown">
                    <button className="dropbtn">
                      <img src={user.user.avatar.imageURL} alt="" />
                    </button>
                    <div className="dropdown-content">
                      <Link
                        to={`profile/${user.user._id}`}
                        className="desktop-link"
                      >
                        Profile
                      </Link>
                      <Link
                        to=""
                        onClick={() => {
                          dispatch(logout());
                          history.push("/");
                        }}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                user.user.role === "Admin" && (
                  <>
                    <div className="dropdown">
                      <button className="dropbtn">
                        <Link className="dropbtn" to={{ pathname: "/blog" }}>
                          Blog
                        </Link>
                      </button>
                      <div className="dropdown-content">
                        <Link to={{ pathname: "/blog/newpost" }}>
                          {" "}
                          Add Post{" "}
                        </Link>
                        <Link to={{ pathname: "/blog/public" }}>
                          Public Posts
                        </Link>{" "}
                        <Link to={{ pathname: "/blog/private" }}>
                          Private Posts
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button className="dropbtn">
                        <img src={user.user.avatar.imageURL} alt="" />
                      </button>
                      <div className="dropdown-content">
                        <Link to={`/admindashboard`} className="desktop-link">
                          Dashboard
                        </Link>
                        <Link
                          to=""
                          onClick={() => {
                            dispatch(logout());
                            history.push("/");
                          }}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  </>
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
