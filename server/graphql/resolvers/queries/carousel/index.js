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
  getCarousel: async (parent, args, { Carousel }) => {
    try {
      return await Carousel.aggregate([
        {
          $match: {
            isItemActive: true,
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
      ]);
    } catch (error) {
      throw error;
    }
  },
};
