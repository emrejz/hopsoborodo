const jwt = require("jsonwebtoken");
module.exports = {
  sign: async (username) => {
    try {
      const token = await jwt.sign({ username }, process.env.SECRET_KEY, {
        expiresIn: "7d",
      });
      return token;
    } catch (error) {
      throw error;
    }
  },
  verify: async (token) => {
    try {
      const result = await jwt.verify(token, process.env.SECRET_KEY);
      return result;
    } catch (error) {
      throw error;
    }
  },
};
