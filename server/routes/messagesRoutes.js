const express = require("express");
const postAuth = require("../middleware/postAuth");
const router = express.Router();
const Message = require("../models/messageSchema");
const User = require("../models/userSchema");
const Chat = require("../models/convoSchema");

//new message
router.post("/", postAuth, async (req, res) => {
  const { content, chatId } = req.body;
  if (!content || !chatId) {
    console.log("Invalid data !");
    return res.sendStatus(400);
  }

  const newMessage = {
    sender: req.userID,
    content: content,
    chat: chatId,
  };
  try {
    var message = await Message.create(newMessage);
    message = await message.populate("sender", "fullname avatar ");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "fullname avatar email",
    });
    await Chat.findByIdAndUpdate(req.body.chatId, {
      latestMessage: message,
    });
    res.json(message);
  } catch (error) {
    console.log(error);
  }
});

//get
router.get("/:chatId", async (req, res) => {
  try {
    const messages = await Message.find({
      chat: req.params.chatId,
    })
      .sort({ createdAt: "desc" })
      .populate("sender", "fullname avatar email")
      .populate("chat");
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(err);
  }
});
module.exports = router;
