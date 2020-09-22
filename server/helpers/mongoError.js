module.exports = {
  forUser: (message) => {
    if (message.includes("E11000")) {
      throw new Error("Username exist!");
    }
    if (message.includes("minimum")) {
      throw new Error("Username must be between 3 or 10 characters!");
    }
    if (message.includes("maximum")) {
      throw new Error("Username must be between 3 or 10 characters!");
    }
    if (message.includes("required")) {
      throw new Error("Username and password are required!");
    }
  },
};
