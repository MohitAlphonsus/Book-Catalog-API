const User = require('../model/userModel');

// Function to register a new user
async function regsiterNewUser(req, res) {
	try {
		const { name, email, password } = req.body;
		const hashedPassword = await User.signup(password);
		const user = await User.create({ name, email, password: hashedPassword });
		res.status(201).json(user);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

// Function to login existing userf
async function loginUser(req, res) {
	try {
		const { email, password } = req.body;
		const user = await User.login(email, password);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

module.exports = { regsiterNewUser, loginUser };
