const { forUser } = require("../../../../helpers/mongoError");
module.exports = {
  createUser: async (parent, { data }, { User }) => {
    try {
      console.log(data);
      await User({ ...data }).save();
      return "emre";
    } catch (error) {
      forUser(error.message);
      throw error;
    }
  },
};
