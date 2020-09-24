const bcrypt = require("bcryptjs");
const { sign } = require("../../../../helpers/jwt");

module.exports = {
  loginUser: async (parent, { data: { username, password } }, { User }) => {
    try {
      const user = await User.findOne({ username });
      if (user) {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          return { token: await sign(username) };
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
  activeUser: async (parent, args, { User, activeUser }) => {
    try {
      return activeUser;
    } catch (error) {
      throw error;
    }
  },
};
