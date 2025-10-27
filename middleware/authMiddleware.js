const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

// Middleware to protect routes
async function protectRoutes(req, res, next) {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			throw new Error('Authorization header is missing or invalid');
		}

		const token = authHeader.split(' ')[1];
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

		const user = await User.findById(decodedToken.id).select('_id');

		if (!user) {
			throw new Error('User not found');
		}

		req.user = user;
		next();
	} catch (err) {
		res.status(403).json({ message: err.message });
	}
}

module.exports = protectRoutes;
