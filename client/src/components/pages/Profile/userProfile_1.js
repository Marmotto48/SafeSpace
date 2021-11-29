import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../../redux/todoListSlice";
import ListGroup from "react-bootstrap/ListGroup";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import { FaEdit, FaCheck } from "react-icons/fa";
import { getCurrentPosts } from "../../../redux/postSlice";

const UserProfile_1 = ({ history, match }) => {
  const user = useSelector((state) => state.user);
  const todo = useSelector((state) => state.todos);
  const post = useSelector((state) => state.posts);
  const [todoInfo, setTodoInfo] = useState({});
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user.userInfo._id === id) {
      history.push("/login");
    } else {
      dispatch(getTodos());
      dispatch(getCurrentPosts());
      dispatch(getUser(id));
    }
  }, [dispatch, user.userInfo._id, history, id]);

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ////////////////////User///////////////////////
  //update
  const [updatedInfo, setUpdatedInfo] = useState();
  const handleUpdate = (e) => {
    setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value });
  };
  const handleUpdateSubmit = (e, userId) => {
    e.preventDefault();
    dispatch(updateUser({ id: userId, data: updatedInfo }));
  };
  //update avatar
  const handleUpdateImage = (e, userId) => {
    dispatch(avatarUpdate({ id: userId, file: e.target.files[0] }));
  };

  // delete user
  const handleDeleteUser = (e, userID) => {
    dispatch(deleteUser({ id: userID }));
  };
  //////////////////TODOO///////
  //todo onChange
  const handleTodo = (e) => {
    setTodoInfo({ ...todoInfo, [e.target.name]: e.target.value });
  };
  //todo update
  const handleTodoUpdate = (e) => {
    setTodoInfo({ ...todoInfo, [e.target.name]: e.target.value });
  };
  const submitTodoUbdate = (e, todoID) => {
    dispatch(updateTodo({ id: todoID, data: todoInfo }));
  };
  // delete post
  const handleDelete = (e, todoID) => {
    dispatch(deleteTodo({ id: todoID }));
  };
  const linkStyle = {
    textDecoration: "inherit",
  };
  return (
    <>
      <div className="profile">
        <div className="main">
          {/* {user && 
            user.user.map((user) => {
              return ( */}
          <div className="glass">
            <div className="dashboard">
              <div className="user">
                <img
                  id="profile-avatar-profile"
                  src={user.userInfo.avatar.imageURL}
                  alt=""
                />
                <h3>{user.userInfo.fullname}</h3>
                <p>{user.userInfo.role}</p>
                <input
                  type="file"
                  name="avatar"
                  onChange={(e) => handleUpdateImage(e, user.userInfo._id)}
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
                onClick={(e) => {
                  handleDeleteUser(e, user.userInfo._id);
                }}
              >
                Delete Account
              </button>
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
                    defaultValue={user.userInfo.fullname}
                    onChange={handleUpdate}
                  />
                </div>

                <div className="profile-card">
                  <p>Email</p>
                  <input
                    name="email"
                    type="text"
                    readOnly
                    defaultValue={user.userInfo.email}
                  />
                </div>
                <div className="profile-card">
                  <p>Age</p>

                  <input
                    type="text"
                    onChange={handleUpdate}
                    name="dateOfBirth"
                  />
                </div>
                <div className="profile-card">
                  <p className="gender">Gender</p>
                  <select
                    name="gender"
                    defaultValue={user.userInfo.gender}
                    onChange={handleUpdate}
                  >
                    <option value="">Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="profile-card">
                  <p>Clinic</p>
                  <input type="text" defaultValue={user.userInfo.clinic} />
                </div>
                <div className="profile-card">
                  <p>Phone Number</p>
                  <input
                    type="text"
                    defaultValue={user.userInfo.phone}
                    name="phone"
                    onChange={handleUpdate}
                  />
                </div>
                <div className="profile-card">
                  <p>Address</p>
                  <input
                    type="text"
                    defaultValue={user.userInfo.address}
                    name="address"
                    onChange={handleUpdate}
                  />
                </div>
              </div>
              <button
                className="submit-btn"
                style={{ width: "160px", margin: "0px auto 15px auto" }}
                onClick={(e) => handleUpdateSubmit(e, user.userInfo._id)}
              >
                Save Changes
              </button>
            </div>
          </div>
          {/* );
            })} */}

          {/* {{/select}} */}
          {/* sectio 2  */}
          <div className="glass-2">
            {post.posts && (
              <div className="tabs">
                <div className="tab">
                  <input
                    className="tabs-input"
                    type="radio"
                    id="rd1"
                    name="rd"
                  />
                  <label className="tab-label" htmlFor="rd1">
                    Posts
                  </label>
                  <div className="tab-content">
                    {post.posts.map((post) => (
                      <div key={post._id}>
                        <h5>{post.title}</h5>
                        {/* <p>{`${postNewDate} ${postTime}`}</p> */}
                        <p> {post.private_2} </p>
                      </div>
                    ))}
                    <div className="seperator-2"></div>
                  </div>
                </div>
                <div className="tab">
                  <input
                    className="tabs-input"
                    type="radio"
                    id="rd2"
                    name="rd"
                  />
                  <label className="tab-label" htmlFor="rd2">
                    Comments
                  </label>
                  <div className="tab-content">
                    {post.posts.map((post) => (
                      <div key={post._id}>
                        {post.comments.map((comment) => (
                          <div key={comment._id}>
                            {comment.commentOwner === user.userInfo._id ? (
                              <>
                                <h5>{post.title}</h5>
                                <p
                                  style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: "2",
                                    WebkitBoxOrient: "vertical",
                                  }}
                                >
                                  {" "}
                                  {comment.desc}{" "}
                                </p>
                              </>
                            ) : (
                              <> {/* <p>You have no posts yet.</p>{" "} */}</>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tab">
                  <input
                    className="tabs-input"
                    type="radio"
                    id="rd4"
                    name="rd"
                  />
                  <label className="tab-label" htmlFor="rd4">
                    Likes
                  </label>
                  <div className="tab-content">
                    <p>You have no Likes yet.</p>{" "}
                  </div>
                </div>
                <div className="tab">
                  <input
                    className="tabs-input"
                    type="radio"
                    id="rd5"
                    name="rd"
                  />
                  <label className="tab-label" htmlFor="rd5">
                    Todo list
                  </label>
                  <div className="tab-content">
                    <div className="add-todo">
                      <input
                        type="text"
                        name="todo"
                        onChange={handleTodo}
                        placeholder="Write todo!"
                      />
                      <IoIosAddCircle
                        style={{ fontSize: "22px", marginLeft: "10px" }}
                        onClick={() => dispatch(addTodo({ todoInfo }))}
                      />
                    </div>
                    <ListGroup as="ol" numbered variant="flush">
                      {todo &&
                        todo.items.map((todo) => (
                          <ListGroup.Item action variant="light" as="li" key={todo._id} >
                            <FaEdit
                              style={{
                                fontSize: "22px",
                                cursor: "pointer",
                                color: "#958A88",
                                marginLeft: "10px",
                              }}
                              onClick={handleShow}
                            />
                            <FaCheck
                              style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                                fontSize: "20px",
                                // color: Todo.isDone ? "green" : "#F9D2C9",
                                cursor: "pointer",
                              }}
                              // onClick={() => dispatch(doneAct(Todo.id))}
                            />
                            {todo.todo}
                            <MdDelete
                              style={{ fontSize: "22px", float: "right" }}
                              onClick={(e) => {
                                handleDelete(e, todo._id);
                              }}
                            />
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Body>
                                <label htmlFor=""> Edit Todo</label>
                                <input
                                  type="text"
                                  name="todo"
                                  defaultValue={todo.todo}
                                  onChange={handleTodoUpdate}
                                />
                              </Modal.Body>
                              <Modal.Footer>
                                <button
                                  className="btn btn-secondary"
                                  onClick={handleClose}
                                >
                                  Cancel
                                </button>
                                <button
                                  className="btn btn-primary"
                                  onClick={(e) => submitTodoUbdate(e, todo._id)}
                                >
                                  Save Changes
                                </button>
                              </Modal.Footer>
                            </Modal>
                          </ListGroup.Item>
                        ))}
                    </ListGroup>
                  </div>
                </div>
                <div className="tab">
                  <input
                    className="tabs-input"
                    type="radio"
                    id="rd3"
                    name="rd"
                  />
                  <label htmlFor="rd3" className="tab-close">
                    Close others &times;
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </>
  );
};

export default UserProfile_1;
