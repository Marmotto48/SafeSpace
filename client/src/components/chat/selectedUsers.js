import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import UserBadgeItem from "./bages";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

const SelectedUsers = ({ user, users, setUsers }) => {
  const u = useSelector((state) => state.user);

  const handleGroup = (userToAdd) => {
    if (users.includes(userToAdd)) {
      alert("User already added");
      return;
    }
    setUsers([...users, userToAdd]);
  };
  const handleDelete = (deleteUser) => {
    setUsers(users.filter((selected) => selected._id !== deleteUser._id));
  };
  return (
    <div>
      {/* selected users */}
      <Stack direction="row" spacing={0.5} sx={{ flexWrap: "wrap" }}>
        {users.map((user) => (
          <UserBadgeItem
            key={user._id}
            user={user}
            handleFunction={() => handleDelete(user)}
          />
        ))}
      </Stack>
      <Box>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {user.users &&
            user.users.map((user) => {
              return (
                <div key={user._id}>
                  {user._id !== u.userInfo._id ? (
                    <ListItem
                      alignItems="flex-start"
                      button
                      autoFocus
                      name="users"
                      user={user}
                      onClick={() => handleGroup(user)}
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
                              {user.role}
                            </Typography>
                            {" — "}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  ) : (
                    <></>
                  )}

                  <Divider variant="inset" component="li" />
                </div>
              );
            })}
        </List>
      </Box>
    </div>
  );
};

export default SelectedUsers;
