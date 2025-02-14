import Form from "../models/form.model.js";

export const addData = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, department } = req.body;
    const alreadyExist = await Form.findOne({ email });
    if (alreadyExist) {
      return res
        .status(400)
        .json({ message: "Data already exist in the database" });
    } else {
      const newData = await Form.create({
        firstName,
        lastName,
        email,
        phone,
        department,
      });
      return res
        .status(201)
        .json({ message: "Data successfully saved in the database", newData });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getData = async (req, res) => {
  try {
    const allData = await Form.find({});
    console.log(allData);
    return res.status(200).json({ message: "Data fetched successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const isDataExist = await Form.findById({ _id: id });
    if (!isDataExist) {
      return res
        .status(400)
        .json({ message: "Data does not exist with this id." });
    } else {
      const data = await Form.findByIdAndDelete({ _id: id });
      return res
        .status(200)
        .json({ message: "Data deleted successfully", data });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateData = async (req, res) => {
  try {
    const id = req.params.id;
    const prevData = await Form.findById({ _id: id });
    if (!prevData) {
      return res
        .status(400)
        .json({ message: "Data does not exist with this id." });
    } else {
      const firstName = req.body.firstName || prevData.firstName;
      const lastName = req.body.lastName || prevData.lastName;
      const email = req.body.email || prevData.email;
      const phone = req.body.phone || prevData.phone;
      const department = req.body.department || prevData.department;

      const updatedData = await Form.findByIdAndUpdate(id, {
        firstName,
        lastName,
        email,
        phone,
        department,
      });
      return res
        .status(201)
        .json({ message: "Data updated successfully", updatedData });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
