import React from "react";
import "./navbar.css";
import { useSelector } from "react-redux";
import { NavbarVisitor } from "./navbarVisitor";
import { NavbarUser } from "./navbarUser";

export const Navbar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="nav-bar">
      {user.isAuth ? <NavbarUser /> : <NavbarVisitor />}
    </div>
  );
};
