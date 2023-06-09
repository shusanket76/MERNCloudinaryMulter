const multer = require("multer");
const { cloudinary } = require("../config/cloudinary");
const { uploads } = require("../config/multer");
const fs = require("fs");
const path = require("path");

const uploadImage = async (req, res, next) => {
  try {
    let cloudinaryResponse;

    if (req.file) {
      cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
        folder: "clothes",
      });
      if (cloudinaryResponse?.url) {
        const delpic = path.join(
          __dirname,
          "..",
          "uploads",
          req.file.originalname
        );
        console.log(delpic);
        fs.unlink(delpic, (err) => {
          if (err) {
            return res.json(err);
          }
          return res.json(cloudinaryResponse?.url);
        });
      }
    }
  } catch (err) {
    res.json(err);
  }
};

module.exports = uploadImage;
