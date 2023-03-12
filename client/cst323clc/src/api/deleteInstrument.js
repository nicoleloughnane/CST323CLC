//Function makes api call to delete an instrument using its id

import axios from "axios";

const deleteInstrument = async (id) => {
  const url = `/instruments/${id}`;
  const response = await axios.delete(url);
  console.log(response.data);
  return response.data;
};

export default deleteInstrument;
