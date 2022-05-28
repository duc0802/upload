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
app.use("/uploadSingle", uploadSingle);
app.use("/image", checkRoute);
app.use("/", imageRoute);

app.use((err, req, res, next) => {});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server dang chay tren cong ${PORT}`.yellow)
);
