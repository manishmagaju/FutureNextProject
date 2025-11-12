import axios from "axios";
import config from "../config";
async function getcourses() {
  const response = await axios.get(`${config.apiURL}/courses`);
  return response.data;
}
export { getcourses };
