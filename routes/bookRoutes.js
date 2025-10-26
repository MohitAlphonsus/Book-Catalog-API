const express = require('express');
const {
	createNewBook,
	getAllBooks,
	getSingleBook,
	editAndUpdateBook,
	deleteBook,
} = require('../controllers/bookController');

const router = express.Router();

// CREATE A NEW BOOK
router.post('/', createNewBook);

// GET ALL BOOKS
router.get('/', getAllBooks);

// GET A SINGLE BOOK
router.get('/:id', getSingleBook);

// UPDATE A BOOK
router.put('/:id', editAndUpdateBook);

// DELETE A BOOK
router.delete('/:id', deleteBook);

module.exports = router;
