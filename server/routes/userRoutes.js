const express = require("express");
const router = express.Router();
const {
  getUsers,
  getDoc,
  getUser,
  register,
  login,
  updateProfile,
  deleteUser,
  updateAvatar,
  searchUser,
} = require("../controllers/userControllers");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../config/cloudinaryConfig");
const postAuth = require("../middleware/postAuth");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "DEV",
  },
});

const upload = multer({ storage });



//get Users
router.get("/", getUsers);
//get Doctors
router.get("/doctors/", getDoc);
//get User
router.get("/getuser/:id", getUser);
//Register User
router.post("/register",  register);
//Login User
router.post("/login", login);
//update profile info
router.put("/update/:id", postAuth, updateProfile);
//delete user
router.delete("/deleteuser/:id", deleteUser);
//update avatar
router.put("/uploadimg/:id", upload.single("userImg"), postAuth, updateAvatar);
//get all users and search
router.get("/search", postAuth, searchUser);
module.exports = router;
