const express = require("express");
const router = express.Router();
const SingleImage = require("../models/SingleImage");
const fs = require("fs-extra");
const path = require("path");

router.get("/:id", async (req, res, next) => {
  const id = await req.params.id;
  try {
    const data = await SingleImage.find({ _id: id });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/:id/:filename", async (req, res, next) => {
  const id = await req.params.id;
  const filename = await req.params.filename;
  const dir = path.join(__dirname, `../public/${id}/`);
  const file = fs.readdirSync(dir);
  res.set({
    "Cache-Control": "public, max-age=31536000",
  });
  const option = {
    root: dir,
  };
  if (file[0] === filename) {
    return res.status(200).sendFile(file[0], option);
  } else {
    return res.status(404).send("Not Found");
  }
});

module.exports = router;
