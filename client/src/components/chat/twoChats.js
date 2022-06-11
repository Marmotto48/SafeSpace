import React, { useState, useEffect, useRef } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../redux/messageSlice";
import Lottie from "react-lottie";
import animationData from "../../animation/typing.json";
export default function TwoChatList({ chat, user, socket }) {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState();
  const [userId, setUserId] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typing, setTyping] = useState(false);
  const messageRef = useRef();
  const msg = useSelector((state) => state.msg);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const sendMessage = (e, chat) => {
    if (socket) {
      const chatId = chat._id;
      socket.emit("stop typing", chatId);
      socket.emit("chatroomMessage", {
        chat,
        message: messageRef.current.value,
      });

      messageRef.current.value = "";
    }
  };

  const typingHandler = (e, chatId) => {
    setNewMessage(e.target.value);

    if (!socket) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", chatId);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 2000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", chatId);
        setTyping(false);
      }
    }, timerLength);
  };

  useEffect(() => {
    if (selectedChat) {
      dispatch(getMessages({ chatId: selectedChat }));
      socket.emit("joinRoom", { chatId: selectedChat });
      socket.on("typing", () => setIsTyping(true));
      socket.on("stop typing", () => setIsTyping(false));
    }
    setSelectedChat();
    // return () => {
    //   //Component Unmount
    //   if (socket) {
    //     socket.emit("leaveRoom", {
    //       chatId : selectedChat,
    //     });
    //   }
    // };
  }, [selectedChat, dispatch, socket, msg]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserId(payload.id);
    }
    if (socket) {
      socket.on("newMessage", (message) => {
        const newMessages = [...messages, message];
        setMessages(newMessages);
      });
    }
    //eslint-disable-next-line
  }, [messages]);

  return (
    <div key={chat._id}>
      {chat.users &&
        chat.users.map((u) => (
          <div key={u._id}>
            {/* Display only the second user in the chat  */}
            {!(user.userInfo._id === u._id) ? (
              <li className="item" style={{ marginBottom: "40px" }}>
                <input
                  type="radio"
                  id={chat._id}
                  name="basic_carousel"
                  value={chat._id}
                  defaultChecked
                />
                <label htmlFor={chat._id}>
                  <ListItem
                    alignItems="flex-start"
                    button
                    autoFocus
                    onClick={(e) => {
                      setSelectedChat(chat._id);
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={u.avatar.imageURL} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={u.fullname}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            last sender
                          </Typography>
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </label>
                <div className="content content_strawberry">
                  <div className="box-header with-border">
                    <h3 className="box-title">{u.fullname}</h3>

                    <div className="box-tools pull-right">
                      <button
                        type="button"
                        className="btn btn-box-tool"
                        data-toggle="tooltip"
                        title="Contacts"
                        data-widget="chat-pane-toggle"
                      ></button>
                    </div>
                  </div>
                  {/* chat box area */}
                  <div className="box-body">
                    <div className="direct-chat-messages">
                      {isTyping ? (
                        <div>
                          <Lottie
                            options={defaultOptions}
                            width={50}
                            style={{ float: "left" }}
                          />
                        </div>
                      ) : (
                        <>
                          {messages.map((message) => (
                            <div key={message._id}>
                              {message.chatID === chat._id && (
                                <>
                                  {userId === message.userID ? (
                                    <div
                                      className="direct-chat-msg right"
                                      style={{ textAlign: "right" }}
                                    >
                                      <img
                                        className="direct-chat-img"
                                        src={message.avatar.imageURL}
                                        alt="Message User "
                                      />
                                      <div className="direct-chat-text">
                                        {message.content}
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="direct-chat-msg">
                                      <div className="direct-chat-info clearfix">
                                        <span className="direct-chat-name pull-left">
                                          {message.name}
                                        </span>
                                        <span className="direct-chat-timestamp pull-right">
                                          23 Jan 2:00 pm
                                        </span>
                                      </div>
                                      <img
                                        className="direct-chat-img"
                                        src={message.avatar.imageURL}
                                        alt="Message User "
                                      />
                                      <div className="direct-chat-text">
                                        {message.content}
                                      </div>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          ))}
                        </>
                      )}

                      {msg.messages &&
                        msg.messages.map((message) => (
                          <div key={message._id}>
                            {userId === message.sender._id ? (
                              <div
                                className="direct-chat-msg right"
                                style={{ textAlign: "right" }}
                              >
                                <img
                                  className="direct-chat-img"
                                  src={message.sender.avatar.imageURL}
                                  alt="Message User "
                                />
                                <div className="direct-chat-text">
                                  {message.content}
                                </div>
                              </div>
                            ) : (
                              <div className="direct-chat-msg">
                                <div className="direct-chat-info clearfix">
                                  <span className="direct-chat-name pull-left">
                                    {message.sender.fullname}
                                  </span>
                                  <span className="direct-chat-timestamp pull-right">
                                    23 Jan 2:00 pm
                                  </span>
                                </div>
                                <img
                                  className="direct-chat-img"
                                  src={message.sender.avatar.imageURL}
                                  alt="Message User "
                                />
                                <div className="direct-chat-text">
                                  {message.content}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="box-footer">
                    <div className="input-group">
                      <input
                        type="text"
                        name="message"
                        placeholder="Type Message ..."
                        className="form-control"
                        value={newMessage}
                        onChange={(e) => typingHandler(e, chat._id)}
                        ref={messageRef}
                      />
                      <span className="input-group-btn">
                        <button
                          type="submit"
                          className="btn btn-primary btn-flat"
                          onClick={(e) => {
                            sendMessage(e, chat);
                            setNewMessage("");
                          }}
                        >
                          Send
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <></>
            )}
          </div>
        ))}
    </div>
  );
}
