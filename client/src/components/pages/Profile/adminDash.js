import React, { useEffect } from "react";
import './adminDash.css'
import { useDispatch, useSelector } from "react-redux";
import {
  MdOutlineDashboard,
  MdExitToApp,
  MdCheck,
  MdOutlineSick,
  MdOutlineReportGmailerrorred,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { GiDoctorFace } from "react-icons/gi";
import { deleteUser, getUsers, logout } from "../../../redux/userSlice";
import { Link } from "react-router-dom";
import { deletePost, getPosts } from "../../../redux/postSlice";

const AdminDashboard = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.posts);

  //get all users
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);
  //delete a user
  const sub_deleteUser = (e, userID) => {
    dispatch(deleteUser({ id: userID }));
  };
  // delete post
  const sub_deletePost = (e, postId) => {
    dispatch(deletePost({ id: postId }));
  };
  return (
    <div className="admin">
      <div className="admin-dashboard">
        <div className="admin-dashboard-content">
          <div className="dashboard-header">
            <img
              className="dashboard-avatar"
              src={user.userInfo.avatar.imageURL}
              alt=""
            />
            <p>Admin {user.userInfo.fullname} </p>
            <MdExitToApp
              className="dashboard-logout"
              onClick={() => {
                dispatch(logout());
                history.push("/");
              }}
            />
          </div>
          <div className="option-card">
            <label htmlFor=""> NAVIGATION</label>
          </div>
          <div className="option-card">
            <a href="#dashboard">
              <MdOutlineDashboard className="dashboard-icon" />
              Dashboard
            </a>
          </div>
          <div className="option-card">
            <a href="#doctors">
              <GiDoctorFace className="dashboard-icon" />
              Doctors
            </a>
          </div>
          <div className="option-card">
            <a href="#patients">
              {" "}
              <MdOutlineSick className="dashboard-icon" />
              Patients
            </a>
          </div>
          <div className="option-card">
            <a href="#posts">
              <BsFillFileEarmarkPostFill className="dashboard-icon" />
              Posts
            </a>
          </div>
          <div className="option-card">
            <a href="#comments">
              <BiCommentDetail className="dashboard-icon" />
              Comments
            </a>
          </div>
          <div className="option-card">
            <a href="#reports">
              <MdOutlineReportGmailerrorred className="dashboard-icon" />
              Reports
            </a>
          </div>
          <div className="option-card">
            <a href="#settings">
              <MdOutlineSettingsSuggest className="dashboard-icon" />
              Settings
            </a>
          </div>
        </div>
      </div>
      <div className="admin-options">
        <div className="admin-header">
          <p>Admin working space</p>
        </div>
        <div className="dashboard-options">
          <div className="admin-header-2" id="dashboard">
            <p>Dashboard</p>
          </div>
          <div className="dashboard-opt-s1">
            <div className="flex-grid">
              <div>
                <h2>Clean CSS Code</h2>
                <ul>
                  <li>
                    <MdCheck /> no position: absolute
                  </li>
                  <li>
                    <MdCheck /> no float
                  </li>
                  <li>
                    <MdCheck /> no clearfix
                  </li>
                  <li>
                    <MdCheck /> no faux columns
                  </li>
                  <li>
                    <MdCheck /> no javascript
                  </li>
                </ul>
              </div>
              <div>
                <h2>Font Awesome</h2>
                <ul>
                  <li>
                    <MdCheck /> no images
                  </li>
                  <li>
                    <MdCheck /> no extra retina sprites
                  </li>
                </ul>
              </div>
              <div>
                <h2>SCSS</h2>
                <ul>
                  <li>
                    <MdCheck /> no headache
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-grid">
              <div>
                <h2>Headline</h2>
                Some Content
              </div>
              <div>
                <h2>Headline</h2>
                Some Content
              </div>
            </div>

            <div className="flex-grid">
              <div>
                <h2>Headline</h2>
                Some Content
              </div>
            </div>
          </div>
          <div className="admin-header-2" id="doctors">
            <p>Doctors' List</p>
          </div>
          <div className="dashboard-opt-s2">
            <div className="container">
              {user.users &&
                user.users.map((user) => {
                  return (
                    <>
                      {user.role === "Doctor" && (
                        <div id="card">
                          <img src={user.avatar.imageURL} alt="" />
                          <p> {user.fullname}</p>
                          <p> {user.email}</p>
                          <p>{user.phone}</p>
                          <Link to={{ pathname: `/profile/${user._id}` }}>
                            Profile
                          </Link>
                          <button
                            className="button buttonDelete"
                            onClick={(e) => {
                              sub_deleteUser(e, user._id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </>
                  );
                })}
            </div>
          </div>
          <div className="admin-header-2" id="patients">
            <p>Patients' List</p>
          </div>
          <div className="dashboard-opt-s2">
            <div className="container">
              {user.users &&
                user.users.map((user) => {
                  return (
                    <>
                      {user.role === "Patient" && (
                        <div id="card">
                          <img src={user.avatar.imageURL} alt="" />
                          <p> {user.fullname}</p>
                          <p> {user.email}</p>
                          <p>{user.phone}</p>
                          <Link to={{ pathname: `/profile/${user._id}` }}>
                            Profile
                          </Link>
                          <button
                            className="button buttonDelete"
                            onClick={(e) => {
                              sub_deleteUser(e, user._id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </>
                  );
                })}
            </div>
          </div>
          <div className="admin-header-2" id="posts">
            <p>Posts' List</p>
          </div>
          <div className="dashboard-opt-s3">
            <table id="customers">
              <tr>
                <th>id</th>
                <th>Title</th>
                <th>State</th>
                <th>Author</th>
                <th>Role</th>
                <th>Category</th>
                <th>Post Created</th>
                {/* <th>Post Updated</th> */}
                <th>Comments</th>
                <th>Likes</th>
                <th>Visit Post</th>
                <th>Delete Post</th>
              </tr>
              {post.posts &&
                post.posts.map((post) => {
                  // date and time format
                  const postNewDate = new Date(
                    post.createdAt
                  ).toLocaleDateString();
                  const postTime = new Date(
                    post.createdAt
                  ).toLocaleTimeString();
                  return (
                    <tr>
                      <td>{post._id}</td>
                      <td>{post.title}</td>
                      <td>{post.private_2}</td>
                      <td>{post.author.fullname}</td>
                      <td>{post.author.role}</td>
                      <td>{post.category}</td>
                      <td>{`${postNewDate} ${postTime}`}</td>
                      <td>{post.comments.length}</td>
                      <td>{post.likes.length}</td>
                      <td>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={{ pathname: `/blog/post/${post._id}` }}
                        >
                          go to post
                        </Link>{" "}
                      </td>
                      <td>
                        {" "}
                        <span
                          className="table-delete-btn"
                          onClick={(e) => {
                            sub_deletePost(e, post._id);
                          }}
                        >
                          Delete Post
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
          <div className="admin-header-2" id="comments">
            <p>Comments' List</p>
          </div>
          <div className="dashboard-opt-s2">
            {" "}
            <table id="customers">
              <tr>
                <th>id</th>
                <th>Post</th>
                <th>Author</th>
                <th>Role</th>
                <th>Created At</th>
              </tr>
              {/* {post.posts &&
                post.posts.comments.map((comment) => {
                  const newDate = new Date(
                    comment.createdAt
                  ).toLocaleDateString();
                  const time = new Date(comment.createdAt).toLocaleTimeString();
                  return ( */}
                    <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>Maria Anders</td>
                      <td>Germany</td>
                      <td>Germany</td>
                      <td>Germany</td>
                    </tr>
                  {/* );
                })} */}
            </table>
          </div>
          <div className="admin-header-2" id="reports">
            <p>Reports</p>
          </div>
          <div className="dashboard-opt-s2">
            <table id="customers">
              <tr>
                <th>id</th>
                <th>Reporter</th>
                <th>Reported</th>
                <th>Post</th>
                <th>Comment</th>
                <th>Reason</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>
            </table>
          </div>
          <div className="admin-header-2" id="settings">
            <p>Settings</p>
          </div>
          <div className="dashboard-opt-s2"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
