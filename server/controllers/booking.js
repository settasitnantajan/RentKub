exports.createBooking = (req, res, next) => {
  try {
    console.log(req.body);
    res.json({ message: "created Booking" });
  } catch (error) {
    next(error);
  }
};
