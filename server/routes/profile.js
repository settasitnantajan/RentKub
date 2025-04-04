const express = require('express');
const router = express.Router();
// controller
const { createProfile } = require('../controllers/profile');
const { authCheck } = require('../middlewares/auth');

// api/Profile
router.post('/profile',authCheck, createProfile);

module.exports = router