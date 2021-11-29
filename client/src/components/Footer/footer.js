import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/">
              <i className="icon ion-social-snapchat">
                <FaTwitter />
              </i>
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube />
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to={{ pathname: "/" }}>FAQ</Link>
            </li>
            <li className="list-inline-item">
              <Link to={{ pathname: "/About" }}>Blog</Link>
            </li>
            <li className="list-inline-item">
              <Link to={{ pathname: "/doctors" }}>Tags</Link>
            </li>
            <li className="list-inline-item">
              <Link to={{ pathname: "/policy" }}>Privacy Policy</Link>
            </li>
          </ul>
          <p className="copyright">Safa Space © 2021</p>
        </footer>
      </div>
    </div>
  );
};
