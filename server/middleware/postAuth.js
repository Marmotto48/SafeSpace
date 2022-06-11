const jwt = require("jsonwebtoken");

const postAuth = async (req, res, next) => {
  try {
    const token = req.header("token");
    const verifyToken = jwt.verify(token, process.env.SecretKey);
    if (!verifyToken) res.status(401).json({ msg: "you are not authorized" });
    req.userID = verifyToken.id;
    next();
  } catch (error) {
    res.status(500).json({ msg: error });
    // console.log(error);
  }
};

module.exports = postAuth;
