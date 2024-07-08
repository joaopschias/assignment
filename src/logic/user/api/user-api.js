import axios from 'axios';

const fetchUserApi = async userId => {
  const response = await axios.get(`/users/${userId}`);
  return response.data;
};

export default fetchUserApi;
