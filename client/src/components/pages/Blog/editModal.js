import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost } from "../../../redux/postSlice";
// import { useHistory } from "react-router-dom";

const EditModal = () => {
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { post } = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);
  const [updatedInfo, setUpdatedInfo] = useState({});
  const dispatch = useDispatch();

  //Update a post
  const handleUpdate = (e) => {
    setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value });
  };
  const handleUpdated = (e, postId) => {
    dispatch(updatePost({ id: postId, data: updatedInfo }));
  };
  // delete post
  const handleDelete = (e, postId) => {
    dispatch(deletePost({ id: postId }));
  };
  return (
    <div>
      <>
        {user.userInfo._id === post.author._id && (
          <>
            <button
              className="delete-btn"
              onClick={(e) => {
                handleDelete(e, post._id);
              }}
            >
              Delete Post
            </button>
            <button className="submit-btn" onClick={handleShow}>
              Edit Post
            </button>
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Body>
                <form className="edit-modal">
                  <label>Title</label>
                  <br />
                  <input
                    type="text"
                    name="title"
                    defaultValue={post.title}
                    onChange={handleUpdate}
                    style={{ width: "100%" }}
                  />
                  <br />
                  <label>Description</label>
                  <br />
                  <input
                    type="text"
                    name="description"
                    defaultValue={post.description}
                    onChange={handleUpdate}
                    style={{ width: "100%" }}
                  />
                  <br />
                  <label htmlFor="private" style={{ marginRight: "7px" }}>
                    {" "}
                    Private
                  </label>

                  <input
                    type="checkbox"
                    name="private"
                    value="private"
                    defaultChecked={post.private}
                    style={{ cursor: "pointer" }}
                    onChange={handleUpdate}
                  />
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={(e) => handleUpdated(e, post._id)}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            {/* MODAL 2 POST DELETED */}
          </>
        )}
      </>
    </div>
  );
};

export default EditModal;
