const express = require('express');
const { regsiterNewUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// REGISTER NEW USER
router.post('/register', regsiterNewUser);

// LOGIN EXISTING USER
router.post('/login', loginUser);

module.exports = router;
