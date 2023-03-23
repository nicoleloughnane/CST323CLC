//Function makes api call to get all instruments

import axios from "axios";

const getInventory = async () => {
  const url = "/instruments";
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};

export default getInventory;
