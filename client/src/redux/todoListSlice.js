import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get all todos
export const getTodos = createAsyncThunk(
  "todos/gettodos",
  async (info, { rejectWithValue }) => {
    try {
      const result = await axios.get("/todo/", {
        headers: { token: localStorage.getItem("token") },
      });
      // const result = await axios.get("http://localhost:5000/todo/");
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
//create new todo
export const addTodo = createAsyncThunk(
  "todo/addtodo",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.post(
        "/todo/addtodo",
        // "http://localhost:5000/todo/addtodo",
        info.todoInfo,
        { headers: { token: localStorage.getItem("token") } }
      );
      dispatch(getTodos());
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg)
        ? error.response.data.msg
        : error.response.data.errors.password.msg;
    }
  }
);
//delete todo
export const deleteTodo = createAsyncThunk(
  "todo/deletetodo",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.delete(
        `/todo/deletetodo/${info.id}`,
        // `http://localhost:5000/todo/deletetodo/${info.id}`,
        info.data,
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      dispatch(getTodos());
      // history.push("/");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
//
//Update post
export const updateTodo = createAsyncThunk(
  "todo/update",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.put(
        `/todo/update/${info.id}`,
        // `http://localhost:5000/todo/update/${info.id}`,
        info.data,
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      dispatch(getTodos(info.id));
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.msg);
    }
  }
);
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    loading: false,
    errors: null,
  },
  extraReducers: {
    //Create new post
    [addTodo.pending]: (state) => {
      state.loading = true;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.errors = null;
    },
    [addTodo.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    //getTodos
    [getTodos.pending]: (state) => {
      state.loading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.errors = null;
    },
    [getTodos.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});
export default todoSlice.reducer;
