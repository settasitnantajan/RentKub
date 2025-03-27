const renderError = require("../utils/renderError");

exports.createProfile = (req, res, next) => {
  try {
    const { firstname, lastname, clerkid } = req.body;
    if (true) {
      return renderError(400, "error message");
    }
    console.log(req.body);
    console.log(firstname, lastname, clerkid);
    res.json({ message: "data createProfile" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
