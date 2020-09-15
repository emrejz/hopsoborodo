const { forUser } = require("../../../../helpers/mongoError");
const { sign } = require("../../../../helpers/jwt");
module.exports = {
  createUser: async (parent, { data: { username, password } }, { User }) => {
    try {
      await User({ username, password }).save();
      return { token: await sign(username) };
    } catch (error) {
      forUser(error.message);
      throw error;
    }
  },
};
