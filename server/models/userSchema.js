const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  role: {
    type: String,
    enum: ["Doctor", "Patient", "isAdmin"],
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  dateOfBirth: String,

  bio: String,
  clinic: String,
  phone: String,
  avatar: {
    imageURL: {
      type: String,
      default:
        "https://res.cloudinary.com/dfkgs6zsr/image/upload/v1636376320/Profile_avatar_placeholder_large_u3gfrg.png",
    },
    public_id: {
      type: String,
    },
  },
  clinicAddress: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});


module.exports = mongoose.model("user", userSchema);
