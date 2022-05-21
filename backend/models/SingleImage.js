const mongoose = require("mongoose");
const moment = require("moment");
const momentTimezone = require("moment-timezone");
const { customAlphabet } = require("nanoid");
const { alphanumeric } = require("nanoid-dictionary");

const nanoid = customAlphabet(alphanumeric, 8);

moment.locale("vi");
const gmt7plus = moment().tz("Asia/Ho_Chi_Minh").format("LL");

const SingleImageSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  name: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  size: {
    type: Number,
    require: true,
  },
  dateCreated: {
    type: String,
    default: gmt7plus,
  },
});

const SingleImage = mongoose.model("SingleImage", SingleImageSchema);

module.exports = SingleImage;
