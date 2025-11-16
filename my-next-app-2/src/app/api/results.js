import axios from "axios";
import config from "../config";

async function getresults() {
  const response = await axios.get(`${config.apiURL}/results`);
  return response.data;
}

export { getresults };
