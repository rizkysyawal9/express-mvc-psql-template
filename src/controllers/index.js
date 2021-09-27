/* eslint-disable no-unused-vars */
exports.getController = (req, res, next) => {
  console.log('this is the get controller');
  res.status(200).json({
    success: true,
    data: {
      mockData: 'mock',
      secondMockData: 'mocky',
    },
  });
};

exports.postController = (req, res, next) => {
  console.log('this is the post controller');
  const payload = req.body;
  res.status(200).json({
    success: true,
    message: payload,
  });
};
