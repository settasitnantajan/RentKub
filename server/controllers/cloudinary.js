exports.createImages = (req, res, next) => {
  try {
    console.log(req.body.image);
    res.json({ message: "upload image" });
  } catch (error) {
    next(error);
  }
};
