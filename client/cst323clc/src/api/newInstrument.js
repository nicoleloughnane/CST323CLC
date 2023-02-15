import axios from "axios";

const newInstrument = async (instrument) => {
  const url = "http://localhost:3000/instruments";
  const response = await axios.post(url, instrument);
  console.log(response.data);
  return response.data;
};

export default newInstrument;
