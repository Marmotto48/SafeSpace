import React, { useEffect } from "react";
import { getPublicPosts } from "../../../redux/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { CircularIndeterminate } from "../../MUI/Spinner";

const Blog = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.posts);
  const post = useSelector((state) => state.posts);

  //get all posts
  useEffect(() => {
    dispatch(getPublicPosts());
  }, [dispatch]);
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : loading ? (
        <CircularIndeterminate />
      ) : (
        <>
          {post.posts &&
            post.posts.map((post) => {
              return (
                <>
                  <h3>{post.title}</h3>
                  <img
                    id="blog-docImg"
                    src={post.author.avatar.imageURL}
                    alt=""
                  />
                </>
              );
            })}
        </>
      )}
    </div>
  );
};

export default Blog;
