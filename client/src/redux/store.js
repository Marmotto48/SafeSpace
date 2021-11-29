import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postReducer from "./postSlice";
import todoReducer from "./todoListSlice";

const store = configureStore(
  { 
    reducer: { user: userReducer, posts: postReducer, todos: todoReducer },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

   },
);

export default store;
