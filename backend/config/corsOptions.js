const allowedOrigin = require("./allowedOrigin");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("NOT ALLOWED FUCKER~SHUSANKET"));
    }
  },
};

module.exports = allowedOrigin;
