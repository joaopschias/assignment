import axios from 'axios';

const fetchUserApi = async userId => {
  const response = await axios.get(`/api/users/${userId}`);
  return response.data;
};

export default fetchUserApi;
