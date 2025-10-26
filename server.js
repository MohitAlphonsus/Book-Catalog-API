const express = require('express');
const connectToDatabase = require('./db/connection');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.json());

//routes
app.get('/', function (req, res) {
	res.send('Welcome To Book Catalog API');
});

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

// start server
async function startBookServer() {
	try {
		await connectToDatabase();

		app.listen(port, () => {
			console.log(`Book catalog API listening on port ${port}`);
		});
	} catch (err) {
		console.log('Error connecting to MongoDB:', err);
	}
}

startBookServer();
