const { createLogger, transports, format } = require("winston");
const { collection } = require("../models/userSchema");
require("winston-mongodb");
const logger = createLogger({
  transports: [
    new transports.File({
      filename: "info.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.MongoDB({
      level: "error",
      db: process.env.URI,
      options: { useUnifiedTopology: true },
      collection: "error_logs",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});
module.exports = logger;
