const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 10,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", User);
