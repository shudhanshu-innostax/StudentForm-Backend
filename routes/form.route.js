const express = require("express");
const { addData, getData } = require("../controllers/form.controller");
const router = express.Router();

// post route for saving the data into the database
router.post("/add", addData);
router.get("/", getData);

module.exports = router;