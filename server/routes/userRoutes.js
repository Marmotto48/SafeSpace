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

const {
  validation,
  registerValidate,
  loginValidate,
} = require("../middleware/validator");

//get Users
router.get("/", getUsers);
//get Doctors
router.get("/doctors/", getDoc);
//get User
router.get("/:id", getUser);
//Register User
router.post("/register", registerValidate(), validation, register);
//Login User
router.post("/login", validation, loginValidate(), login);
router.put("/update/:id", updateProfile);
//delete user
router.delete("/deleteuser/:id", deleteUser);
//update avatar
router.put("/uploadimg/:id", upload.single("userImg"), postAuth, updateAvatar);

module.exports = router;
