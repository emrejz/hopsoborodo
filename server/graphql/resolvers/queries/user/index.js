module.exports = {
  loginUser: async (parent, args) => {
    try {
      console.log(parent);
      console.log(args);
    } catch (error) {
      throw error;
    }
  },
};
