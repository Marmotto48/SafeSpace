import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addChatroom = createAsyncThunk(
  "conversation/addChatroom",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post(`/conversations/addchatroom/`, info, {
        headers: { token: localStorage.getItem("token") },
      });
      dispatch(getTwoChats());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//create group chat
export const addGroupChatroom = createAsyncThunk(
  "conversation/CreateGroupChat",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post("/conversations/groupchat", info, {
        headers: { token: localStorage.getItem("token") },
      });
      dispatch(getGroupChatrooms());
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message
          ? error.response.data.message
          : error.response.data.errors.password.msg
      );
    }
  }
);
//get all group chatrooms
export const getGroupChatrooms = createAsyncThunk(
  "conversation/getGroupChatrooms",
  async (info, { rejectWithValue }) => {
    try {
      const result = await axios.get("/conversations/groupchat", {
        headers: { token: localStorage.getItem("token") },
      });
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
export const getTwoChats = createAsyncThunk(
  "conversation/getTwoChatrooms",
  async (info, { rejectWithValue }) => {
    try {
      const result = await axios.get("/conversations/", {
        headers: { token: localStorage.getItem("token") },
      });
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
//-------------------------------Update Group chat name--------------------------------------
export const updateGroupName = createAsyncThunk(
  "conversation/updateGroupName",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.put(`/conversations/groupchat`, info, {
        headers: { token: localStorage.getItem("token") },
      });
      dispatch(getGroupChatrooms());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
//-------------------------------Add member to group chat--------------------------------------
export const addMember = createAsyncThunk(
  "conversation/addMember",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.put(`/conversations/addmember`, info, {
        headers: { token: localStorage.getItem("token") },
      });
      dispatch(getGroupChatrooms());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
//-------------------------------Remove member to group chat--------------------------------------
export const removeMember = createAsyncThunk(
  "conversation/removemember",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.put(`/conversations/removemember`, info, {
        headers: { token: localStorage.getItem("token") },
      });
      dispatch(getGroupChatrooms());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
//get single chatroom
export const getSingleChat = createAsyncThunk(
  "conversation/getSingleChatRoom",
  async (info, { rejectWithValue }) => {
    try {
      const result = await axios.get(`/conversations/singlechat/${info.id}`, {
        headers: { token: localStorage.getItem("token") },
      });
      return result.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.msg);
    }
  }
);
const chatSlice = createSlice({
  name: "conversations",
  initialState: {
    chats: [],
    twoChats: [],
    loading: false,
    chatErrors: null,
    chatsErrors: null,
    chat: {},
  },
  extraReducers: {
    [addChatroom.pending]: (state) => {
      state.loading = true;
    },
    [addChatroom.fulfilled]: (state, action) => {
      state.loading = false;
      state.chatErrors = null;
    },
    [addChatroom.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    //create group chat
    [addGroupChatroom.pending]: (state) => {
      state.loading = true;
    },
    [addGroupChatroom.fulfilled]: (state, action) => {
      state.loading = false;
      state.chatErrors = null;
    },
    [addGroupChatroom.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    //get conversations
    [getGroupChatrooms.pending]: (state) => {
      state.loading = true;
    },
    [getGroupChatrooms.fulfilled]: (state, action) => {
      state.loading = false;
      state.chats = action.payload;
      state.chatsErrors = null;
    },
    [getGroupChatrooms.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    //get conversations
    [getTwoChats.pending]: (state) => {
      state.loading = true;
    },
    [getTwoChats.fulfilled]: (state, action) => {
      state.loading = false;
      state.twoChats = action.payload;
      state.chatsErrors = null;
    },
    [getTwoChats.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    //get single chatroom
    [getSingleChat.pending]: (state) => {
      state.loading = true;
    },
    [getSingleChat.fulfilled]: (state, action) => {
      state.chat = action.payload;
      state.loading = false;
      state.chatErrors = null;
    },
    [getSingleChat.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default chatSlice.reducer;
