import express from "express";
import config from "./config/config.js";
import connectDB from "./config/database.js";
import studentRoutes from "./routes/studentRoutes.js";
import bodyParser from "body-parser";

const app = express();
connectDB();
app.use(bodyParser.json());

app.use("/students", studentRoutes);

app.listen(config.port, () => {
  console.log(`server running at port ${config.port}`);
});
