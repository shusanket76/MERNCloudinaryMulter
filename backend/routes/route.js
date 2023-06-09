const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const uploadImage = require("../controller/imageController");
const deleteImage = require("../controller/deleteController");

router.route("/").post(upload.single("image"), uploadImage);
// router.route("/").post(deleteImage);
module.exports = router;
