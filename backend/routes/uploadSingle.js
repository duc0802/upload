const express = require("express");
const router = express.Router();
const SingleImage = require("../models/SingleImage");
const { upload, idImage } = require("../middleware/upload");

router.post("/", upload.single("file"), async (req, res) => {
  const file = req.file;
  console.log(file);
  if (file) {
    const url = `${req.protocol}://${req.get("host")}/${idImage}/${
      file.originalname
    }`;
    const img = new SingleImage({
      name: file.originalname,
      url: url,
      type: file.mimitype,
      size: file.size,
    });

    try {
      const result = await img.save();
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
});

module.exports = router;
