const mongoose = require('mongoose');

const BookSchema = mongoose.Schema(
	{
		title: { type: String, required: true },
		author: { type: String, required: true },
		genre: { type: String, required: true },
		price: { type: Number, required: true },
		inStock: { type: Boolean, required: true, default: true },
	},
	{ timestamps: true },
);

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
