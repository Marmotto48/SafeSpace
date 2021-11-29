const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  likes : {
      type:[mongoose.Types.ObjectId],
      default: [],
  },

  comments: [
    {
      commentOwner: { type: mongoose.Types.ObjectId, ref: 'user' },
      desc: String,
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
  ],
  private: {
    type: Boolean,
    default: false,
    required: true
  },
  private_2: {
    type: String,
    enum: ["Private", "Public"],
    default : "Public",
    required: true
  },
  category : {
    type: String, 
    enum: ["Anxiety", "children", "Bipolar", "Depression", "DDD", "Eating", "Paranoia", "OCD", "Psychosis", "Schizophrenia", "PTSD", "AD", "PD", "FD", "SGD", "SSD", "Tic"],
  }
});
module.exports = mongoose.model("post", PostSchema);
