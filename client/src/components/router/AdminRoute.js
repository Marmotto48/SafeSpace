import React from 'react'
import { Redirect, Route } from 'react-router';
import {  useSelector } from "react-redux";

export const AdminRoute = ({component: Component, ...rest}) => {
  const user = useSelector((state) => state.user);
    const isAuth = localStorage.getItem('token');
    if (isAuth && user.userInfo.isAdmin) {
        return <Route component={Component} {...rest} />
    }
    return <Redirect path='/' />
}
