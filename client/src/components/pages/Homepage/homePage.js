import React, { useEffect } from "react";
import "./homepage.css";
import img1 from "./img1-hp.png";
import { DemoCarousel } from "../Doctors/docCarousel";
import { Link } from "react-router-dom";
import { RiMentalHealthLine } from "react-icons/ri";
import { BsFillChatDotsFill } from "react-icons/bs";
import { GiDoctorFace } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../redux/postSlice";

const Homepage = () => {
  const linkStyle = {
    textDecoration: "inherit",
  };
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);

  //get all posts
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="hp">
      <div className="banner">
        <span className="banner-title">
          <span>Let's make your life happier</span>
          <h1>Healthy Living</h1>
        </span>
      </div>
      <div className="box-container">
        <div className="card-service ">
          <div className="inside-service-card blue-circle ">
            <BsFillChatDotsFill />
          </div>

          <span>Chat with a doctor</span>
        </div>
        <div className="card-service">
          <div className="inside-service-card green-circle">
            <RiMentalHealthLine />
          </div>
          <span>Protect Yourself</span>
        </div>
        <div className="card-service">
          <div className="inside-service-card pink-circle">
            <GiDoctorFace />
          </div>
          <span>Professionals</span>
        </div>
      </div>
      <div className="about-hp">
        <div className="about-hp-content">
          <h1>Welcome to Your Safe Space</h1>
          <p className="text-grey mb-4">
            Psychiatry is the medical specialty devoted to the diagnosis,
            prevention, and treatment of mental disorders. These include
            various maladaptations related to mood, behaviour, cognition, and
            perceptions. See glossary of psychiatry. Initial psychiatric
            assessment of a person typically begins with a case history and
            mental status examination. Physical examinations and psychological
            tests may be conducted...
          </p>
          <Link
            className="read-more"
            to={{ pathname: "/about" }}
            style={linkStyle}
          >
            Learn More
          </Link>
        </div>
        <img src={img1} alt="" className="img1-hp" />
      </div>
      <div className="our-docs">
        <h1>Our Doctors</h1>
        <DemoCarousel />
      </div>

      {/* SECTION 5 : OUR ARTICLES */}
      <div className="posts-hp">
        <h1>Our Articles </h1>
        <div className="posts-hp-card-container">
          {post.posts &&
            post.posts.map((post) => {
              // date and time format
              const postNewDate = new Date(post.createdAt).toLocaleDateString();
              const postTime = new Date(post.createdAt).toLocaleTimeString();
              return (
                <div key={post._id} >
                  {post.private_2 === "Public" && (
                    <div className="posts-hp-card" key={post._id}>
                      <div className="posts-hp-card-header">
                        <div className="post-hp-card-category">
                          <Link to={{ pathname: "/faq" }} style={linkStyle}>
                            {post.category}
                          </Link>
                        </div>
                        <a href="blog-details.html" className="post-thumb">
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="post-hp-body">
                        <h5 className="post-hp-title">
                          <Link
                            to={{ pathname: `/blog/post/${post._id}` }}
                            style={linkStyle}
                          >
                            {post.title}
                          </Link>
                        </h5>
                        <div className="site-info">
                          <div className="post-hp-avatar">
                            <div className="post-hp-avatar-img">
                              <img src={post.author.avatar.imageURL} alt="" />
                            </div>
                            <span>
                              {post.author.fullname} <br />{" "}
                              {`${postNewDate} ${postTime}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <Link className="read-more" to={{ pathname: "/blog" }}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
