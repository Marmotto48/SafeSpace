import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost } from "../../../redux/postSlice";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import { useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import { useHistory } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const EditModal = () => {
  const history = useHistory();
  // modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { post } = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);
  const [updatedInfo, setUpdatedInfo] = useState({});
  const dispatch = useDispatch();

  //Update a post
  const handleUpdate = (e) => {
    setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value });
  };
  const ondescription = (value) => {
    setUpdatedInfo({ ...updatedInfo, description: value });
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
                history.push("/blog");
              }}
            >
              Delete Post
            </button>
            <button className="submit-btn" onClick={handleClickOpen}>
              Edit Post
            </button>
            {/* MODAL */}
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                Edit Post
              </BootstrapDialogTitle>
              <DialogContent dividers>
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
                  <ReactQuill
                    theme="snow"
                    onChange={ondescription}
                    // defaultReadOnly={true}
                    defaultValue={post.description}
                    // value={postInfo}
                    placeholder={"Write something ..."}
                    modules={EditModal.modules}
                    formats={EditModal.formats}
                  />
                  <br />
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
              </DialogContent>
              <DialogActions>
                <Button
                  variant="primary"
                  onClick={(e) => {
                    handleUpdated(e, post._id);
                    handleClose();
                  }}
                >
                  Save Changes
                </Button>
              </DialogActions>
            </BootstrapDialog>
            {/* MODAL 2 POST DELETED */}
          </>
        )}
      </>
    </div>
  );
};

export default EditModal;

EditModal.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
EditModal.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
