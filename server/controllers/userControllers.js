const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const cloudinary = require("../config/cloudinaryConfig");

module.exports = {
  //register new user
  register: async (req, res) => {
    try {
      const {
        role,
        fullname,
        email,
        password,
        dateOfBirth,
        gender,
        avatar,
        clinic,
        phone,
        bio,
        address,
      } = req.body;
      //unique email
      const searchEmail = await User.findOne({ email });
      if (searchEmail) {
        return res.status(400).send({ msg: "Email already exists." });
      }

      //hash password
      const salt = 10;
      const genSalt = bcrypt.genSaltSync(salt);
      const hashedPW = await bcrypt.hash(password, genSalt);
      //save new user //token
      const newUser = await User.create({
        role,
        fullname,
        email,
        password: hashedPW,
        dateOfBirth,
        gender,
        avatar,
        clinic,
        phone,
        bio,
        address,
      });
      //Token
      const token = jwt.sign(
        {
          role: newUser.role,
          fullname: newUser.name,
          clinic: newUser.clinic,
          phone: newUser.phone,
          email: newUser.email,
          id: newUser._id,
        },
        process.env.SecretKey
      );
      res.json({ user: newUser, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Cannot save new user", error });
      console.log(error);
    }
  },

  //login user
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      //   find if the user exist
      const searchedUser = await User.findOne({ email });

      //if the email does not exist
      if (!searchedUser) {
        return res.status(400).send({
          msg: "Not a member ? Join our community !",
        });
      }

      // password are equals
      const match = await bcrypt.compare(password, searchedUser.password);
      if (!match) {
        return res.status(400).send({
          msg: "Your email or password is wrong, please try again.",
        });
      }
      // generate token
      const token = jwt.sign(
        { id: searchedUser._id, fullname: searchedUser.fullname },
        process.env.SecretKey
      );
      res.status(200).send({
        user: searchedUser,
        msg: "Success",
        token,
      });
    } catch (error) {
      res.status(500).send({ msg: "Can not get user." });
      console.log(error);
    }
  },
  // get one user by id
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select("-password");
      res.json(user);
    } catch (error) {
      res.status(500).json({ msg: "Can not get user.", error });
    }
  },
  //Update profile by id
  updateProfile: async (req, res) => {
    try {
      const { fullname, email, gender, clinic, phone, dateOfBirth, bio } =
        req.body;
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          fullname,
          email,
          gender,
          clinic,
          phone,
          dateOfBirth,
          bio,
        },
        { new: true }
      );
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Can not update profile.", error });
    }
  },
  //update avatar
  // updateImg: async (req, res) => {
  //   try {
  //     const docImgInfo = await cloudinary.uploader.upload(req.file.path);
  //     const existPost = await Doc.findById(req.params.id);
  //     cloudinary.uploader.destroy(existPost.image.public_id);
  //     const updatedPost = await Doc.findByIdAndUpdate(req.params.id, {
  //       image: { imageURL: docImgInfo.url, public_id: docImgInfo.public_id },
  //     });

  //     res.json(updatedPost);
  //   } catch (error) {
  //     res.status(500).send({ msg: "can not upload profile avatar", error });
  //     console.log(error);
  //   }
  // },
  //get all doctors
  deleteUser: async (req, res) => {
    try {
      const deleteUser = await User.findByIdAndDelete(req.params.id);
      res.json({ msg: "User deleted.", deleteUser });
    } catch (error) {
      res.status(500).json({ msg: "Can not delete user.", error });
    }
  },
  //get users
  getUsers: async (req, res) => {
    try {
      const users = await User.find().select("-password");
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "can not get users", error });
    }
  },
  getDoc: async (req, res) => {
    try {
      const doc = await User.find({ role: "Doctor" }).select("-password");
      res.json(doc);
    } catch (error) {
      res.status(500).json({ msg: "Can not get user.", error });
    }
  },
  //ipdate avatar
  updateAvatar: async (req, res) => {
    try {
      const imageInfo = await cloudinary.uploader.upload(req.file.path);
      const existUser = await User.findById(req.params.id);
      // cloudinary.uploader.destroy(existUser.image.public_id);
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        image: { imageURL: imageInfo.url, public_id: imageInfo.public_id },
      });
      res.json(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },
};
