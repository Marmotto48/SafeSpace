import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create new message
export const addMessage = createAsyncThunk(
  "messages/addMessage",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.post("/messages/", info, {
        headers: { token: localStorage.getItem("token") },
      });
      // console.log(result.data);
      // dispatch(getMessages());
      // dispatch(getPublicPosts());
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg)
        ? error.response.data.msg
        : error.response.data.errors.password.msg;
    }
  }
);
//get all messages
export const getMessages = createAsyncThunk(
  "messages/getMessages",
  async (info, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/messages/${info.chatId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    loading: false,
    messageErrors: null,
    messagesErrors: null,
    message: {},
  },
  extraReducers: {
    [addMessage.pending]: (state) => {
      state.loading = true;
    },
    [addMessage.fulfilled]: (state, action) => {
      state.loading = false;
      state.messageErrors = null;
      state.message = action.payload;
    },
    [addMessage.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [getMessages.pending]: (state) => {
      state.loading = true;
    },
    [getMessages.fulfilled]: (state, action) => {
      state.loading = false;
      state.messages = action.payload;
      state.messagesErrors = null;
    },
    [getMessages.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default messageSlice.reducer;
