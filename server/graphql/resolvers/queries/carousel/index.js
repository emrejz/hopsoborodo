module.exports = {
  // getCarouList: async (parent, { mainTitle }, { Carousel }) => {
  //   try {
  //     const a = await Carousel.find({ mainTitle });
  //     console.log(a);
  //     return { child: a };
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  getCarousel: async (parent, { isItemActive }, { Carousel }) => {
    try {
      return await Carousel.aggregate([
        {
          $match: {
            isItemActive,
          },
        },
        {
          $group: {
            _id: "$mainTitle",
            list: {
              $push: "$$ROOT",
            },
          },
        },
        {
          $addFields: { mainTitle: "$_id" },
        },
        {
          $project: { _id: 0 },
        },
        {
          $sort: {
            mainTitle: 1,
          },
        },
      ]);
    } catch (error) {
      throw error;
    }
  },
};
