const renderError = require("../utils/renderError");

exports.createProfile = (req, res, next) => {
  try {
    const { firstname, lastname } = req.body;

    res.json({ message: "data createProfile" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
