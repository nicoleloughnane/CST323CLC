//Function makes api call to add a new instrument
import axios from "axios";

const newInstrument = async (instrument) => {
  const url = "/instruments";
  const response = await axios.post(url, instrument);
  console.log(response.data);
  return response.data;
};

export default newInstrument;
