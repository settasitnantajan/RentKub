const prisma = require("../config/prisma");
const { calTotal } = require("../utils/booking");
const renderError = require("../utils/renderError");

exports.createBooking = async (req, res, next) => {
  try {
    // Destructing req.body
    const { campingId, checkIn, checkOut } = req.body;
    const { id } = req.user;
    // Delete Booking
    await prisma.booking.deleteMany({
      where: {
        profileId: id,
        paymentStatus: false,
      },
    });
    // Find Camping
    const camping = await prisma.landmark.findFirst({
      where: {
        id: campingId,
      },
      select: {
        price: true,
      },
    });
    if (!camping) {
      return renderError(400, "Camping not found");
    }

    // Calculate total
    const { total, totalNights } = calTotal(checkIn, checkOut, camping.price);

    // Insert to db
    const booking = await prisma.booking.create({
      data: {
        profileId: id,
        landmarkId: campingId,
        checkIn,
        checkOut,
        total,
        totalNights,
      },
    });
    console.log(booking);
    const bookingId = booking.id;

    // Send id booking to react
    res.json({ message: "Booking Successfully", result: bookingId });
  } catch (error) {
    next(error);
  }
};
