const jwt = require('jsonwebtoken');

// Function to generate JWT token for user authentication

function generateToken(user) {
	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});
	return token;
}

module.exports = generateToken;
