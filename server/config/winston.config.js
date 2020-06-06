// third-party libraries
import winston from "winston";
import path from "path";

// logging optoins
const options = {
  file: {
    level: "info",
    filename: path.resolve("logs/app.log"),
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// winston instance
const logger = new winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
});

// logging streams
logger.stream = {
  write(message, encoding) {
    logger.info(message);
  },
};

export default logger;
