const bcrypt = require("bcryptjs");
const { sign } = require("../../../../helpers/jwt");

module.exports = {
  loginUser: async (parent, { data: { username, password } }, { User }) => {
    try {
      const user = await User.findOne({ username });
      if (user) {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          return { token: await sign(user) };
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
    return activeUser;

    //which one is correct way???

    // const { username } = activeUser;
    // console.log(username);
    // console.log(activeUser);
    // try {
    //   if (username) {
    //     const { isAdmin, username } = await User.findOne({ username });
    //     return {
    //       isAdmin,
    //       username,
    //     };
    //   }
    // } catch (error) {
    //   throw error;
    // }
  },
};
