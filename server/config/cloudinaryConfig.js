const cloudinary = require('cloudinary').v2 ;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.cloudinary_name, 
  api_key: process.env.cloudinary_api_key, 
  api_secret: process.env.Cloudinary_API_secret, 
  secure: true

});
module.exports = cloudinary;