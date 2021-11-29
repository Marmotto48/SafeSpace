const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todo: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
    }
  
   
  });
  module.exports = mongoose.model("todo", TodoSchema);
  