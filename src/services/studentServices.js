import student from "../models/student.js";

const getstudents = async (query) => {
  const students = await student.find();
  return students;
};

const getstudentById = async (id) => {
  const studentone = await student.findById(id);
  return studentone;
};
const createstudents = async (data) => {
  //create product
  const createdstudent = await student.create(data);
  return createdstudent;
};

const updatestudents = async (id, data) => {
  const updatedstudent = await student.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedstudent;
};
const deletestudents = async (id) => {
  await student.findByIdAndDelete(id);
};
export default {
  getstudents,
  getstudentById,
  createstudents,
  updatestudents,
  deletestudents,
};
