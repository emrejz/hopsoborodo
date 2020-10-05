const mongoose = require("mongoose");
module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL_PROD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("mongo ok");
  } catch (error) {
    console.log("mongo error ", error);
  }
};
