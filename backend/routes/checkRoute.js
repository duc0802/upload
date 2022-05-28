const express = require("express");
const router = express.Router();
const SingleImage = require("../models/SingleImage");
const fs = require("fs-extra");
const path = require("path");

router.get("/all", (req, res) => {
  SingleImage.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
});

router.get("/delete", (req, res) => {
  const dir = path.join(__dirname, "../public/");
  try {
    const folders = fs.readdirSync(dir);
    folders.forEach((folder) => {
      fs.rmSync(path.join(dir, folder), { recursive: true, force: true });
      console.log("All folders deleted");
    });
  } catch (err) {
    throw err;
  }
  SingleImage.deleteMany({})
    .then((success) => {
      res.send("success: " + JSON.stringify(success));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
