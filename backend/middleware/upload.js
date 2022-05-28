const multer = require("multer");
const fs = require("fs-extra");
const path = require("path");
const { customAlphabet } = require("nanoid");
const { alphanumeric } = require("nanoid-dictionary");

const nanoid = customAlphabet(alphanumeric, 8);

const idImage = nanoid();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, "../public", idImage);
    fs.mkdirSync(dir);
    cb(null, `public/${idImage}`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = { upload, idImage };
