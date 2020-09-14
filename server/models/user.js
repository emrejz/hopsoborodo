const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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

User.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    if (this.password && this.password.trim() && this.password.trim() > 3) {
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err);
        }

        user.password = hash;
        next();
      });
    } else {
      return next(new Error("Password can be min 3 characters!"));
    }
  });
});
module.exports = mongoose.model("user", User);
