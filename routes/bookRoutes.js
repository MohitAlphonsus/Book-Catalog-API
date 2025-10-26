const express = require('express');
const {
	createNewBook,
	getAllBooks,
	getSingleBook,
	editAndUpdateBook,
} = require('../controllers/bookController');

const router = express.Router();

// CREATE A NEW BOOK
router.post('/', createNewBook);

// GET ALL BOOKS
router.get('/', getAllBooks);

// GET A SINGLE BOOK
router.get('/:id', getSingleBook);

// EDIT AND UPDATE A BOOK
router.patch('/:id', editAndUpdateBook);

module.exports = router;
