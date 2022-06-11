import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroupChatrooms, getTwoChats } from "../../redux/chatSlice";
import Box from "@mui/material/Box";
import { BsFillChatDotsFill } from "react-icons/bs";
import { purple } from "@mui/material/colors";
import {
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd,
  AiOutlineSearch,
} from "react-icons/ai";
import SimpleDialogDemo from "./groupMembers";
import TwoChatList from "./twoChats";
import BasicModal from "./userList";
import CreateGroup from "./CreateGroupChat";
import ChatBox from "./chatBox";
import socketIOClient from "socket.io-client";

export default function Chatroom({ match }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const chat = useSelector((state) => state.chat);
  // const [response, setResponse] = useState("");
  // const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [searchResult, setSearchResult] = useState("");
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  //eslint-disable-next-line
  const [show, setShow] = useState(false);
  //-----------------------------------------------SOCKET IO----------------------------------------------------------------
  const [socket, setSocket] = useState("");
  const ENDPOINT = "http://127.0.0.1:5000";
  const socketSetup = () => {
    const token = localStorage.getItem("token");
    if (token) {
      if (token.length > 0 && !socket) {
        const newSocket = socketIOClient(ENDPOINT, {
          query: {
            token: localStorage.getItem("token"),
          },
        });
        newSocket.on("disconnect", () => {
          setSocket(null);
          setTimeout(socketSetup, 3000);
          console.log("Socket Disconnected!");
        });
        newSocket.on("connect", () => {
          console.log("Socket Connected!");
        });
        setSocket(newSocket);
      }
    }
  };
  useEffect(() => {
    socketSetup();
    //eslint-disable-next-line
  }, []);

  //------------------------Modal--------------------
  useEffect(() => {
    dispatch(getGroupChatrooms());
    dispatch(getTwoChats());
    //eslint-disable-next-line
  }, [dispatch]);
  const [open, setOpen] = useState(false);
  const [open_2, setOpen_2] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen_2 = () => setOpen_2(true);
  //***************************************** */
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="chat-test">
      <div>
        {/* <div className="chat-sidebar"> */}
        <div>
          <Box
            sx={{
              main: purple[500],
              boxShadow: 1,
              borderRadius: 1,
              p: 2,
              width: 400,
              //responsive width
              // width: [100, 200, 300]
            }}
          >
            <input
              placeholder="search doc"
              name="search"
              // onChange={(e) => handleSearch(e.target.value)}
              // value={search}
            />
            <AiOutlineSearch
              style={{
                fontSize: "22px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              // onClick={handleSearch}
            />
            <AiOutlineUserAdd
              style={{ fontSize: "25px", float: "right", cursor: "pointer" }}
              onClick={handleOpen}
            />
            <BasicModal open={open} setOpen={setOpen} user={user} />
            <div className="chat-seperator"></div>
          </Box>
        </div>
        <div className="chat-sidebar">
          <div className="chatGroup">
            <h6>Chat groups</h6>
            <AiOutlineUsergroupAdd
              style={{
                fontSize: "25px",
                cursor: "pointer",
                marginLeft: "20px",
              }}
              onClick={handleOpen_2}
            />

            <CreateGroup open={open_2} setOpen={setOpen_2} user={user} />
          </div>
          <div className="chat-seperator"></div>
          {/*  */}
          <div className="">
            <br />
            <div className="group-members"></div>
          </div>
        </div>
        <div
          className="inside-service-card blue-circle "
          style={{
            position: "fixed",
            right: "50px",
            bottom: "40px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <BsFillChatDotsFill />
        </div>{" "}
        <ChatBox
          handleClick={handleClick}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          chat={chat}
        />
      </div>
      <h1>chatbox 2</h1>
      <>
        <div id="scene">
          <div id="left-zone">
            <ul className="list">
              {chat.twoChats &&
                chat.twoChats.map((chat) => {
                  return (
                    <TwoChatList
                      chat={chat}
                      key={chat._id}
                      user={user}
                      socket={socket}
                      // typing={typing}
                      // setTyping={setTyping}
                    />
                  );
                })}

              {chat.chats &&
                chat.chats.map((chat) => {
                  return (
                    <SimpleDialogDemo
                      chat={chat}
                      key={chat._id}
                      user={user}
                      socket={socket}
                      typing={typing}
                      setTyping={setTyping}
                      setIstyping={setIsTyping}
                      isTyping={isTyping}
                    />
                  );
                })}
            </ul>
          </div>
          <div id="middle-border"></div>
          <div id="right-zone"></div>
        </div>
      </>
      {/* <div className="chat">
        <div className="fabs">
          <div className="chat">
            <div className="chat_header">
              <span id="chat_head">Live Chat</span>
              <div className="chat_loader"></div>
              <div className="chat_option">
                <i className="zmdi zmdi-more-vert"></i>
                <ul>
                  <li>
                    <span
                      className="chat_color"
                      style={{ border: "solid 5px #2196F3" }}
                      color="blue"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="chat_color"
                      style={{ border: "solid 5px #00bcd4" }}
                      color="cyan"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="chat_color"
                      style={{ border: "solid 5px #607d8b" }}
                      color="blue-grey"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="chat_color"
                      style={{ border: "solid 5px #4caf50" }}
                      color="green"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="chat_color"
                      style={{ border: "solid 5px #8bc34a" }}
                      color="light-green"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="chat_color"
                      style={{ border: "solid 5px #cddc39" }}
                      color="lime"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="chat_color"
                      style={{ border: "solid 5px #ffc107" }}
                      color="amber"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="chat_color"
                      style={{ border: "solid 5px #ff5722" }}
                      color="deep-orange"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="chat_color"
                      style={{ border: "solid 5px #f44336" }}
                      color="red"
                    ></span>
                  </li>
                </ul>
              </div>
            </div>

            <div id="chat_converse" className="chat_converse">
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <i className="zmdi zmdi-headset-mic"></i>
                </div>
                Hi! How may I be of service
              </span>
              <span className="chat_msg_item chat_msg_item_user">
                <div className="chat_avatar">
                  <i className="zmdi zmdi-account"></i>
                </div>
                Ermm..
              </span>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <i className="zmdi zmdi-headset-mic"></i>
                </div>
                Hi! How may I be of service
              </span>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <i className="zmdi zmdi-headset-mic"></i>
                </div>
                Hi! How may I be of service
              </span>
              <span className="chat_msg_item chat_msg_item_admin">
                <div className="chat_avatar">
                  <i className="zmdi zmdi-headset-mic"></i>
                </div>
                Hi! How may I be of service
              </span>
            </div>

            <div className="fab_field">
              <textarea
                id="chatSend"
                name="chat_message"
                placeholder="Write a message"
                className="chat_field chat_message"
              ></textarea>
              <MdSend />
            </div>
          </div>
          <a
            target="_blank"
            id="fab_help"
            className="fab"
            onClick={handleShow}
            href="/"
          >
            <i className="zmdi zmdi-help-outline"></i>
          </a>
          <button id="prime" className="fab">
            <i className="prime zmdi zmdi-plus"></i>
          </button>
        </div>
      </div> */}
    </div>
  );
}
