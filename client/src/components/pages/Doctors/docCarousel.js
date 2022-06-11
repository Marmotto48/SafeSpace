import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./docCarousel.css";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { getDocs } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
export const DemoCarousel = () => {
  const linkStyle = { color: "inherit", textDecoration: "inherit" };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDocs());
  }, [dispatch]);
  const user = useSelector((state) => state.user);

  return (
    <Carousel>
      <Helmet>
        <meta
          name="description"
          content="All you need to know about Safe Space doctors "
          property="og:title"
        />
        <meta charSet="utf-8" />
        <link rel="canonical" href="/doctors" />
      </Helmet>
      {user.users &&
        user.users.map((user) => {
          return (
            <div className="card" key={user._id}>
              <img id="docImg" src={user.avatar.imageURL} alt="" />
              <h4>{user.fullname}</h4>
              <small>{user.clinic}</small>
              <button className="visit-btn">
                <Link to={{ pathname: "/doctors" }} style={linkStyle}>
                  See more
                </Link>
              </button>
            </div>
          );
        })}
    </Carousel>
  );
};
