import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

export const DocRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  const isAuth = localStorage.getItem("token");
  if (
    isAuth &&
    (user.userInfo.role === "Doctor" || user.userInfo.role === "Admin")
  ) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect path="/" />;
};
