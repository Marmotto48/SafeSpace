import React from 'react'
import { BsSearch } from "react-icons/bs";
import './blog.css'
const Sidebar = () => {
    return (
        <div className="blog-sidebar">
            <div className="blog-sidebar-header">
              <h5>Join our Newsletter</h5>
              <input type="email" />
              <button className="submit-btn">Join Us !</button>
            </div>
            <div className="recent-posts">
              <h5>Recent Posts</h5>
              <div
                className="blog-sidebar-posts"
                style={{ backgroundColor: " rgba(64, 224, 208, 0.287)" }}
              >
                <h4 style={{ fontSize: "16px" }}>List group item heading</h4>
                <p style={{ fontSize: "10px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  optio eum &hellip;
                </p>
              </div>
              <div className="blog-sidebar-posts">
                <h4 style={{ fontSize: "16px" }}>List group item heading</h4>
                <p style={{ fontSize: "10px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  optio eum &hellip;
                </p>
              </div>
              <div className="blog-sidebar-posts">
                <h4 style={{ fontSize: "16px" }}>List group item heading</h4>
                <p style={{ fontSize: "10px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  optio eum &hellip;
                </p>
              </div>
              <div className="blog-sidebar-posts">
                <h4 style={{ fontSize: "16px" }}>List group item heading</h4>
                <p style={{ fontSize: "10px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  optio eum &hellip;
                </p>
              </div>
            </div>
            <div className="blog-sidebar-header">
              <h5>Search Categories</h5>
              <input type="email" />
              <BsSearch style={{cursor:'pointer', fontSize:'20px'}} />
            </div>
          </div>
    )
}

export default Sidebar
