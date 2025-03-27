const express = require('express');
const router = express.Router();
// controller
const { createProfile } = require('../controllers/profile')

// api/Profile
router.post('/profile', createProfile);

module.exports = router