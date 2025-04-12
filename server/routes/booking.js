const express = require("express");
const router = express.Router();
// controller
const { createBooking } = require("../controllers/Booking");
const { authCheck } = require("../middlewares/auth");

// api/Profile
router.post("/booking", authCheck, createBooking);

module.exports = router;
