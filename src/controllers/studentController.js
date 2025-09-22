import studentServices from "../services/studentServices.js";

const getstudents = async (req, res) => {
  const students = await studentServices.getstudents(req.query);
  res.status(200).json(students);
};
const getstudentById = async (req, res) => {
  const id = req.params.id;
  const student = await studentServices.getstudentById(id);
  res.json(student);
};

const createstudents = async (req, res) => {
  const data = await studentServices.createstudents(req.body);
  res.json(data);
};

const updatestudents = async (req, res) => {
  const id = req.params.id;
  try {
    const updateddata = await studentServices.updatestudents(id, req.body);
    res.status(201).json(updateddata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deletestudents = async (req, res) => {
  const id = req.params.id;
  await studentServices.deletestudents(id);
  res.send(`student deleted succesfully with id:${id}`);
};
export default {
  getstudents,
  getstudentById,
  createstudents,
  updatestudents,
  deletestudents,
};
