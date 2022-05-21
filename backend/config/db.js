const mongoose = require("mongoose");

const db = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    const connectDB = await mongoose.connect(process.env.MONGO_URI, options);
    console.log(`MongoDB Connected: ${connectDB.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = db;
