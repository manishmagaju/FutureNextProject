import express from "express";
import studentController from "../controllers/studentController.js";
const router = express.Router();
router.get("/", studentController.getstudents);
router.get("/:id", studentController.getstudentById);
router.post("/", studentController.createstudents);
router.put("/:id", studentController.updatestudents);
router.delete("/:id", studentController.deletestudents);

export default router;
