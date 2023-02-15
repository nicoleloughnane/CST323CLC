import axios from "axios";

const deleteInstrument = async (id) => {
  const url = `http://localhost:3000/instruments/${id}`;
  const response = await axios.delete(url);
  console.log(response.data);
  return response.data;
};

export default deleteInstrument;
