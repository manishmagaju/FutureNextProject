import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  mongodburl: process.env.MONGODB_URL || "",
};
export default config;
