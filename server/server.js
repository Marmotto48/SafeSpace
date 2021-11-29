const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
const path = require("path");
PORT = process.env.PORT;
// const cors = require("cors");
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//connect to the database
connectDB();

//setup cors
// app.use(cors());
//socket
// const io = socketio(server)
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnection", ()=>{
      console.log('user disconnected');
  })
});

//middleware routing body parse
app.use(express.json());
app.use("/user", require("./routes/userRoutes"));
app.use("/blog", require("./routes/postRoutes"));
app.use("/todo", require("./routes/todoRoutes"));
app.use(
  "/uploads",
  express.static(path.join(__dirname, "./controllers/uploads/"))
);
app.use("/chat", require("./routes/chatRoutes"));

//setup deployment
app.use(express.static(path.join(__dirname, '../', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
});


app.listen(process.env.PORT || 3000, (error) => {
  error ? console.error(error) : console.log(`Server runing on port ${process.env.PORT || 3000}`);
});
