const express = require ('express');
const router = express.Router();
const UserController = require("../controllers/UserControllers");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary = require('../config/cloudinaryConfig');
const postAuth = require("../middleware/postAuth");


const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'DEV',
  },
});

const upload = multer({ storage });


const {
    validation,
    registerValidate,
    loginValidate,
  } = require("../middleware/validator");


  //get Users
router.get('/', UserController.getUsers)
//get Doctors
router.get('/doctors/', UserController.getDoc)
//get User
router.get('/:id', UserController.getUser)
//Register User
router.post("/register",registerValidate(), validation, UserController.register);
//Login User
router.post("/login", validation, loginValidate(), UserController.login);
router.put('/update/:id', UserController.updateProfile);
//delete user
router.delete("/deleteuser/:id", UserController.deleteUser);
//update avatar
router.put("/uploadimg/:id", upload.single('userImg'), postAuth, UserController.updateAvatar);




module.exports = router;
