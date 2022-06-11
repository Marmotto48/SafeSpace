import React, { useEffect, useState } from "react";
import "./postPage.css";
import "../../buttons.css";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getPost, postLike, addComment } from "../../../redux/postSlice";
import EditModal from "./editModal";
import Sidebar from "./sidebar";
import ModalAlert from "./ModalAlert";
const PostPage = ({ match }) => {
  const linkStyle = {
    color: "inherit",
    textDecoration: "inherit",
  };

  //

  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);

  const [comment, setComment] = useState({});
  //get post
  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [dispatch, match.params.id]);
  //Add likes
  const checkLike = (post) => {
    if (user.isAuth)
      return post.likes.some((likeId) => likeId === user.userInfo._id);
  };
  const handleLike = (postId, post) => {
    dispatch(postLike(postId));
  };
  //Add comment

  const handleComment = (e, postId) => {
    e.preventDefault();
    dispatch(addComment({ postId, desc: comment }));
  };
  // date and time format
  const postNewDate = new Date(post.createdAt).toLocaleDateString();
  const postTime = new Date(post.createdAt).toLocaleTimeString();
  //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="post-page-0">
      {post && post.title && (
        <>
          <div className="post-page">
            <div className="post-page-header">
              <h2>{post.title}</h2>
              {user.isAuth ? <EditModal /> : <></>}
              {/* Like post */}
              <BsStarFill
                style={
                  checkLike(post)
                    ? { color: "goldenrod" }
                    : { color: "rgb(33,37,41)" }
                }
                onClick={user.isAuth ? () => handleLike(post._id) : handleOpen}
                className="blog-icons star-PP"
              />
              <p style={{ margin: "auto 7px" }}>{post.likes.length}</p>
            </div>
            <h6>Category : {post.category}</h6>
            <div className="post-page-seperator"></div>
            <div className="post-page-1">
              <div className="post-page-profile">
                <h5>{post.author.fullname}</h5>
                <img src={post.author.avatar.imageURL} alt="" />
                <span>
                  <Link to={{ pathname: "/doctors" }} style={linkStyle}>
                    {post.author.role}
                  </Link>
                </span>
              </div>
              <div
                className="post-page-post"
                dangerouslySetInnerHTML={{ __html: post.description }}
              ></div>
            </div>
            <div className="post-page-seperator-2">
              <p>{`${postNewDate} ${postTime}`}</p>
            </div>
            {/* Add comment */}
            <div className="write-comment">
              <input
                type="text"
                placeholder="Add comment"
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                type="submit"
                className="submit-btn"
                // onClick={(e) => handleComment(e, post._id)}
                onClick={
                  user.isAuth ? (e) => handleComment(e, post._id) : handleOpen
                }
              >
                Comment
              </button>
            </div>
            {/* Comments section */}

            {post.comments.map((comment) => {
              const newDate = new Date(comment.createdAt).toLocaleDateString();
              const time = new Date(comment.createdAt).toLocaleTimeString();
              return (
                <div>
                  <div className="comments-section">
                    <div className="post-page-profile">
                      <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                        {comment.commentOwner.fullname}
                      </p>
                      <img src={comment.commentOwner.avatar.imageURL} alt="" />
                      <span>
                        <Link
                          to={
                            comment.commentOwner.role === "Doctor"
                              ? { pathname: "/doctors" }
                              : { pathname: "/patients" }
                          }
                          style={linkStyle}
                        >
                          {comment.commentOwner.role}
                        </Link>
                      </span>
                    </div>
                    <div className="post-page-post">{comment.desc}</div>
                  </div>
                  <div className="post-page-seperator-3">
                    <p>{`${newDate} ${time}`}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <ModalAlert open={open} setOpen={setOpen} />
          <div className="circle-3"></div>
          <div className="circle-4"></div>
          <div className="circle-5"></div>
          <div className="circle-6"></div>
        </>
      )}
      <Sidebar />
    </div>
  );
};

export default PostPage;
