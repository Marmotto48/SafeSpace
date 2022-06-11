import React, { useState, useEffect } from "react";
import "./chatroom.css";
import { useDispatch, useSelector } from "react-redux";
import { getDocs } from "../../redux/userSlice";
import { MdSend } from "react-icons/md";
import { getTwoChats } from "../../redux/chatSlice";
import { Link } from "react-router-dom";
import "./chat.css";
const Chat = ({ match }) => {
  //eslint-disable-next-line
  const [show, setShow] = useState(false);
  //eslint-disable-next-line
  const chatroomId = match.params.id;
  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useSelector((state) => state.user);
  const convo = useSelector((state) => state.convo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDocs());
    dispatch(getTwoChats());
  }, [dispatch]);

  return (
    <div className="chat_2">
      <body>
        <div class="container">
          <div class="row">
            <section class="chat">
              <div class="messages-chat">
                <div class="message text-only">
                  <div class="response">
                    <p class="text"> When can we meet ?</p>
                  </div>
                </div>
                <p class="response-time time"> 15h04</p>
                <div class="message">
                  <div
                    class="photo"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
                    }}
                  >
                    <div class="online"></div>
                  </div>
                  <p class="text"> 9 pm at the bar if possible 😳</p>
                </div>
                <p class="time"> 15h09</p>
              </div>
              <div class="footer-chat">
                <i
                  class="icon fa fa-smile-o clickable"
                  style={{ fontSize: "25pt" }}
                  aria-hidden="true"
                ></i>
                <input
                  type="text"
                  class="write-message"
                  placeholder="Type your message here"
                ></input>
                <i
                  class="icon send fa fa-paper-plane-o clickable"
                  aria-hidden="true"
                ></i>
              </div>
            </section>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Chat;
