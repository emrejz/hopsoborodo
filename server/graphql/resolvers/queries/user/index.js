const bcrypt = require("bcryptjs");

module.exports = {
  loginUser: async (parent, { data: { username, password } }, { User }) => {
    try {
      const user = await User.findOne({ username });
      if (user) {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          return "ok";
        } else {
          throw new Error("Wrong password!");
        }
      } else {
        throw new Error("Wrong username!");
      }
    } catch (error) {
      throw error;
    }
  },
};
