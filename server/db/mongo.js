const mongoose = require("mongoose");
module.exports = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/hopsoborodo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo ok");
  } catch (error) {
    console.log("mongo error ", error);
  }
};
