const express = require("express");
const {
  addData,
  getData,
  deleteData,
  updateData,
} = require("../controllers/form.controller");
const router = express.Router();

// post route for saving the data into the database
router.post("/add", addData);
// get route for fetching the data from the database
router.get("/", getData);
// delete route for deleting the data from the database
router.delete("/delete/:id", deleteData);
// put route for updating the data inside the database
router.put("/update/:id", updateData);

module.exports = router;