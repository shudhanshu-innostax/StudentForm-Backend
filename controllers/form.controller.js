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
        .status(200)
        .json({ message: "Data successfully saved in the database", newData });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
