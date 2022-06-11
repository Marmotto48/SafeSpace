import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postReducer from "./postSlice";
import todoReducer from "./todoListSlice";
import chatReducer from "./chatSlice";
import messageReducer from "./messageSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    todos: todoReducer,
    chat: chatReducer,
    msg: messageReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
