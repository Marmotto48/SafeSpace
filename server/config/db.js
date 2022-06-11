const mongoose = require("mongoose");
const winston = require("winston");

const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
    // winston.info("Database connected");
  } catch (error) {
    console.error("Connection to databse failed", error);
  }
  // mongoose
  //   .connect(process.env.URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   })
  //   .then(() => winston.info("Mongo Db Connected....."));
};
module.exports = connectDB;
