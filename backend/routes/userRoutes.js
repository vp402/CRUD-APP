const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');  // Importing protect function correctly

// Define your routes and apply protect middleware where needed
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;  // Correctly exporting the router

