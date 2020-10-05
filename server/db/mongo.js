const mongoose = require("mongoose");
module.exports = async () => {
  const { PORT, MONGO_URL_DEV, MONGO_URL_PROD } = process.env;
  try {
    await mongoose.connect(PORT ? MONGO_URL_PROD : MONGO_URL_DEV, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("mongo ok");
  } catch (error) {
    console.log("mongo error ", error);
  }
};
