const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Carousel = new Schema({
  mainTitle: {
    type: String,
    required: true,
  },

  isItemActive: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  backImg: {
    type: String,
    required: true,
  },
  iconImg: {
    type: String,
  },
  mobileBC: {
    type: String,
    required: true,
  },
  isDark: {
    type: Boolean,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("carousel", Carousel);
