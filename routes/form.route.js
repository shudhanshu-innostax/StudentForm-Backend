const express = require('express');
const { addData } = require('../controllers/form.controller');
const router = express.Router();

// post route for saving the data into the database
router.post('/add', addData);

module.exports = router;