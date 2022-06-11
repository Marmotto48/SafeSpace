import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/userSlice";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import { addChatroom } from "../../redux/chatSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: 500,
  overflow: "auto",
};

export default function BasicModal({ open, setOpen, user }) {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  // const handleSubmit = (userId) => {
  //   // e.preventDefault();
  //   dispatch(addChatroom({ data: userId }));
  //   console.log(userId);
  // };
  const addMember = (userId) => {
    dispatch(addChatroom({ userId: userId }));
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Users List
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {user.users &&
              user.users.map((user) => {
                return (
                  <div key={user._id}>
                    <ListItem
                      alignItems="flex-start"
                      button
                      autoFocus
                      onClick={() => addMember(user._id)}
                    >
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={user.avatar.imageURL} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={user.fullname}
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
                    <Divider variant="inset" component="li" />
                  </div>
                );
              })}
          </List>
        </Box>
      </Modal>
    </div>
  );
}
