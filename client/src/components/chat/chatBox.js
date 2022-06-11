import * as React from "react";
import Popover from "@mui/material/Popover";
import { AiOutlineClose } from "react-icons/ai";

export default function BasicPopover({ setAnchorEl, anchorEl, chat }) {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        // anchorOrigin={{
        //   vertical: "top",
        //   horizontal: "left",
        // }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <div className="box box-primary direct-chat direct-chat-primary">
          <div className="box-header with-border">
            <h3 className="box-title">Direct chat</h3>

            <div className="box-tools pull-right">
              <button
                type="button"
                className="btn btn-box-tool"
                data-toggle="tooltip"
                title="Contacts"
                data-widget="chat-pane-toggle"
              >
                <AiOutlineClose onClick={handleClose} />
              </button>
            </div>
          </div>
          <div className="box-body">
            <div className="direct-chat-messages">
              <div className="direct-chat-msg">
                <div className="direct-chat-info clearfix">
                  <span className="direct-chat-name pull-left">
                    Alexander Pierce
                  </span>
                  <span className="direct-chat-timestamp pull-right">
                    23 Jan 2:00 pm
                  </span>
                </div>
                <img
                  className="direct-chat-img"
                  src="https://bootdey.com/img/Content/user_1.jpg"
                  alt="Message User "
                />
                <div className="direct-chat-text">
                  Is this template really for free? That's unbelievable!
                </div>
              </div>

              <div className="direct-chat-msg right">
                <div className="direct-chat-info clearfix">
                  <span className="direct-chat-name pull-right">
                    Sarah Bullock
                  </span>
                  <span className="direct-chat-timestamp pull-left">
                    23 Jan 2:05 pm
                  </span>
                </div>
                <img
                  className="direct-chat-img"
                  src="https://bootdey.com/img/Content/user_2.jpg"
                  alt="Message User "
                />
                <div className="direct-chat-text">qsdhfkjsdhfkqjsf</div>
              </div>
            </div>

            <div className="direct-chat-contacts">
              <ul className="contacts-list">
                <li>
                  <a href="/">
                    <img
                      className="contacts-list-img"
                      src="https://bootdey.com/img/Content/user_1.jpg"
                      alt=""
                    />

                    <div className="contacts-list-info">
                      <span className="contacts-list-name">
                        Count Dracula
                        <small className="contacts-list-date pull-right">
                          2/28/2015
                        </small>
                      </span>
                      <span className="contacts-list-msg">
                        How have you been? I was...
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="box-footer">
            <div className="input-group">
              <input
                type="text"
                name="message"
                placeholder="Type Message ..."
                className="form-control"
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary btn-flat">
                  Send
                </button>
              </span>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
}
