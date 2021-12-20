import axios from 'axios';

export const changeCountry = async (country, id) => {
  const response = await axios.put(`http://localhost:4000/countries/${id}`, country);
  return response.data;
};
