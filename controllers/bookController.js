const Book = require('../model/bookModel');

// function to create a new book
async function createNewBook(req, res) {
	console.log(req.body);
	try {
		const newBook = await Book.create(req.body);
		res.status(201).json(newBook);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

// function to get all books
async function getAllBooks(req, res) {
	try {
		const books = await Book.find();
		res.status(200).json(books);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

// function to get a single book
async function getSingleBook(req, res) {
	try {
		const { id } = req.params;
		const book = await Book.findById({ _id: id });
		res.status(200).json(book);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

// function to edit and update a book
async function editAndUpdateBook(req, res) {
	try {
		const { id } = req.params;
		const book = await Book.findByIdAndUpdate({ _id: id }, req.body, {
			new: true,
		});
		res.status(200).json(book);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

module.exports = {
	getAllBooks,
	createNewBook,
	getSingleBook,
	editAndUpdateBook,
};
