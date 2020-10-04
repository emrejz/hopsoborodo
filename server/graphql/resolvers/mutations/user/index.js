const { forUser } = require("../../../../helpers/mongoError");
const { sign } = require("../../../../helpers/jwt");
module.exports = {
  createUser: async (parent, { data: { username, password } }, { User }) => {
    try {
      const user = await User({ username, password }).save();
      return { token: await sign(user) };
    } catch (error) {
      forUser(error.message);
      throw error;
    }
  },
};
