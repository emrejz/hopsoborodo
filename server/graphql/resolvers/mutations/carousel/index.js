const { forUser } = require("../../../../helpers/mongoError");

module.exports = {
  addCarouselElement: async (parent, { data }, { Carousel }) => {
    try {
      return await Carousel(data).save();
    } catch (error) {
      throw error;
    }
  },
};
