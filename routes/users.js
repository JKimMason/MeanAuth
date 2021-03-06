const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

// Authenticate
router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

// Profile
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

// Export router
module.exports = router;
