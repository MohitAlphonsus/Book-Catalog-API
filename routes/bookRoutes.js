const express = require('express');
const {
	createNewBook,
	getAllBooks,
	getSingleBook,
	editAndUpdateBook,
	deleteBook,
} = require('../controllers/bookController');
const protectRoutes = require('../middleware/authMiddleware.js');

const router = express.Router();

// GET ALL BOOKS
router.get('/', getAllBooks);

// GET A SINGLE BOOK
router.get('/:id', getSingleBook);

// CREATE A NEW BOOK
router.post('/', protectRoutes, createNewBook);

// UPDATE A BOOK
router.put('/:id', protectRoutes, editAndUpdateBook);

// DELETE A BOOK
router.delete('/:id', protectRoutes, deleteBook);

module.exports = router;
