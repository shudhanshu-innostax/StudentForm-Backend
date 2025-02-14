const express = require("express");
const { addData, getData, deleteData } = require("../controllers/form.controller");
const router = express.Router();

// post route for saving the data into the database
router.post("/add", addData);
router.get("/", getData);
router.delete("/delete/:id",deleteData)

module.exports = router;