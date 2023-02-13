import axios from "axios";

const getInventory = async () => {
  const url = "http://localhost:3000/instruments";
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};

export default getInventory;
