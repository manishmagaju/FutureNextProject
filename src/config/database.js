import moongoose from "mongoose";
import config from "./config.js";
function connectDB() {
  moongoose
    .connect(config.mongodburl)
    .then(() => {
      console.log("databse connected successfully");
    })
    .catch((error) => console.log(error));
}
export default connectDB;
