const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const db = require("./config/db");
const colors = require("colors");
const uploadSingle = require("./routes/uploadSingle");
const checkRoute = require("./routes/checkRoute");
const imageRoute = require("./routes/imageRoute");

require("dotenv").config();
db();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: { policy: "same-site" } }));

// routes
app.use("v1/uploadSingle/", uploadSingle);
app.use("v1/image/", checkRoute);
app.use("/", imageRoute);

app.use((req, res, next) => {
  const { access_key } = req.query;
  if (access_key !== "abcxyz123") {
    return res.status(400).send({ msg: "Access_key wrong" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server dang chay tren cong ${PORT}`.yellow)
);
