import axios from "axios";
import config from "../config";

async function getassignments() {
  const response = await axios.get(`${config.apiURL}/assignments`);
  return response.data;
}
export { getassignments };
