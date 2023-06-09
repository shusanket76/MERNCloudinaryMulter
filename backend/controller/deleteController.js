const multer = require("multer");
const { cloudinary } = require("../config/cloudinary");
const { uploads } = require("../config/multer");
const fs = require("fs");
const path = require("path");

const deleteImage = async (req, res, next) => {
  try {
    let cloudinaryResponse;

    cloudinaryResponse = cloudinary.uploader.destroy(
      "fedea5ojr1jktyveptg8",
      (err, res) => {
        console.log(res, err);
      }
    );
  } catch (error) {
    return res.json(error);
  }
};

module.exports = deleteImage;
