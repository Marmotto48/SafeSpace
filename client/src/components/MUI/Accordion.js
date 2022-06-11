import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../redux/todoListSlice";
import { Link, withRouter } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import EditIcon from "@mui/icons-material/Edit";
import { getCurrentPosts } from "../../redux/postSlice";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";

//------------Accordion Functions-------------------------//
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
//----------------------Todo list functions-----------------------//
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
function ProfileAccordions() {
  const [expanded, setExpanded] = useState("");
  const todo = useSelector((state) => state.todos);
  const [todoInfo, setTodoInfo] = useState({});
  const dispatch = useDispatch();

  //////////////////TODOO///////
  //todo onChange
  const handleTodo = (e) => {
    setTodoInfo({ ...todoInfo, [e.target.name]: e.target.value });
  };
  //todo update
  const handleTodoUpdate = (e) => {
    setTodoInfo({ ...todoInfo, [e.target.name]: e.target.value });
  };
  const submitTodoUbdate = (e, todoID) => {
    dispatch(updateTodo({ id: todoID, data: todoInfo }));
  };
  // delete post
  const handleDelete = (e, todoID) => {
    dispatch(deleteTodo({ id: todoID }));
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(getCurrentPosts());
  }, [dispatch]);
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Articles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PostsList />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CommentsList />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Likes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel4d-header">
          <Typography>Todo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <InteractiveList />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={8}>
        <Demo>
          <List dense={dense}>
            {generate(
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <IconButton edge="end" aria-label="delete">
                    <AssignmentTurnedInIcon />
                  </IconButton>
                </ListItemAvatar>
                <ListItemAvatar>
                  <IconButton edge="end" aria-label="delete">
                    <EditIcon />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            )}
          </List>
        </Demo>
      </Grid>
    </Box>
  );
}

function PostsList() {
  const post = useSelector((state) => state.posts);
  const linkStyle = {
    textDecoration: "inherit",
    color: "inherit",
  };
  return (
    <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
      {post.posts &&
        post.posts.map((post) => {
          const postNewDate = new Date(post.createdAt).toLocaleDateString();
          return (
            <>
              <ListItem alignItems="flex-start" disablePadding>
                <Link
                  style={linkStyle}
                  to={{ pathname: `/blog/post/${post._id}` }}
                >
                  <ListItemText
                    primary={post.title}
                    secondary={
                      <React.Fragment>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Link
                            style={linkStyle}
                            to={
                              post.private_2 === "Public"
                                ? { pathname: `/blog/` }
                                : { pathname: `/blog/private` }
                            }
                          >
                            <Typography
                              sx={{ display: "inline", marginRight: 1 }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {`${post.private_2} —`}
                            </Typography>
                          </Link>
                          <Typography
                            variant="overline"
                            display="block"
                            gutterBottom
                          >
                            {`${postNewDate} `}
                          </Typography>
                        </div>
                      </React.Fragment>
                    }
                  />
                </Link>
              </ListItem>
              <Divider variant="" component="li" />
            </>
          );
        })}
    </List>
  );
}

function CommentsList() {
  const post = useSelector((state) => state.posts);
  const linkStyle = {
    textDecoration: "inherit",
    color: "inherit",
  };
  return (
    <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
      {post.posts.map((post) => (
        <>
          {post.comments.map((comment) => (
            <>
              <>
                <h5>{post.title}</h5>
                <p
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {" "}
                  {comment.desc}{" "}
                </p>
              </>
            </>
          ))}
        </>
      ))}
      {post.posts &&
        post.posts.map((post) => {
          const postNewDate = new Date(post.createdAt).toLocaleDateString();
          return (
            <>
              <ListItem alignItems="flex-start" disablePadding>
                <Link
                  style={linkStyle}
                  to={{ pathname: `/blog/post/${post._id}` }}
                >
                  <ListItemText
                    primary={post.title}
                    secondary={
                      <React.Fragment>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{ display: "inline", marginRight: 1 }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {/* {comment.desc}{" "} */}
                          </Typography>
                        </div>
                      </React.Fragment>
                    }
                  />
                </Link>
              </ListItem>
              <Divider variant="" component="li" />
            </>
          );
        })}
    </List>
  );
}
export { ProfileAccordions, InteractiveList, PostsList, CommentsList };
