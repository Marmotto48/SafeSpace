import React, {useState} from "react";
// import io from "socket.io-client";
import "./chat.css";
const Chat = ({ match, location }) => {
  // const chatRommdId = match.params.id;
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="chat">
      <h3>CHAT TEST 1</h3>
      {/* <section className="msger">
        <header className="msger-header">
          <div className="msger-header-title">
            <i className="fas fa-comment-alt"></i> SimpleChat
          </div>
          <div className="msger-header-options">
            <span>
              <i className="fas fa-cog"></i>
            </span>
          </div>
        </header>

        <main className="msger-chat">
          <div className="msg left-msg">
            <div
              className="msg-img"
              style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/327/327779.svg)"}}
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">BOT</div>
                <div className="msg-info-time">12:45</div>
              </div>

              <div className="msg-text">
                Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
              </div>
            </div>
          </div>

          <div className="msg right-msg">
            <div
              className="msg-img"
              style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)"}}
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">Sajad</div>
                <div className="msg-info-time">12:46</div>
              </div>

              <div className="msg-text">
                You can change your name in JS section!
              </div>
            </div>
          </div>
        </main>

        <form className="msger-inputarea">
          <input
            type="text"
            className="msger-input"
            placeholder="Enter your message..."
          />
          <button type="submit" className="msger-send-btn">
            Send
          </button>
        </form>
      </section> */}
      <div class="fabs">
        <div class="chat">
          <div class="chat_header">
            <span id="chat_head">Live Chat</span>
            <div class="chat_loader"></div>
            <div class="chat_option">
              <i class="zmdi zmdi-more-vert"></i>
              <ul>
                <li>
                  <span
                    class="chat_color"
                    style={{ border: "solid 5px #2196F3" }}
                    color="blue"
                  ></span>
                </li>
                <li>
                  <span
                    class="chat_color"
                    style={{ border: "solid 5px #00bcd4" }}
                    color="cyan"
                  ></span>
                </li>
                <li>
                  <span
                    class="chat_color"
                    style={{ border: "solid 5px #607d8b" }}
                    color="blue-grey"
                  ></span>
                </li>
                <li>
                  <span
                    class="chat_color"
                    style={{ border: "solid 5px #4caf50" }}
                    color="green"
                  ></span>
                </li>
                <li>
                  <span
                    class="chat_color"
                    style={{ border: "solid 5px #8bc34a" }}
                    color="light-green"
                  ></span>
                </li>
                <li>
                  <span
                    class="chat_color"
                    style={{ border: "solid 5px #cddc39" }}
                    color="lime"
                  ></span>
                </li>
                <li>
                  <span
                    class="chat_color"
                    style={{ border: "solid 5px #ffc107" }}
                    color="amber"
                  ></span>
                </li>
                <li>
                  <span
                    class="chat_color"
                    style={{ border: "solid 5px #ff5722" }}
                    color="deep-orange"
                  ></span>
                </li>
                <li>
                  <span
                    class="chat_color"
                    style={{ border: "solid 5px #f44336" }}
                    color="red"
                  ></span>
                </li>
              </ul>
            </div>
          </div>

          <div id="chat_converse" class="chat_converse">
            <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                <i class="zmdi zmdi-headset-mic"></i>
              </div>
              Hi! How may I be of service
            </span>
            <span class="chat_msg_item chat_msg_item_user">
              <div class="chat_avatar">
                <i class="zmdi zmdi-account"></i>
              </div>
              Ermm..
            </span>
          </div>
          <div class="fab_field">
            <a id="fab_listen" class="fab" href="/">
              <i class="zmdi zmdi-mic-outline"></i>
            </a>
            <a id="fab_send" class="fab" href="/">
              <i class="zmdi zmdi-mail-send"></i>
            </a>
            <textarea
              id="chatSend"
              name="chat_message"
              placeholder="Write a message"
              class="chat_field chat_message"
            ></textarea>
          </div>
        </div>
        <a target="_blank" id="fab_help" class="fab" onClick={handleShow} href="/" >
          <i class="zmdi zmdi-help-outline"></i>
        </a>
        <button id="prime" class="fab">
          <i class="prime zmdi zmdi-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;
