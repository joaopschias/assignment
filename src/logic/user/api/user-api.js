import axios from 'axios';

export const getAllUsers = async () => {
  const response = await axios.get('/users');
  return response.data;
};

const fetchUserApi = async userId => {
  const response = await axios.get(`/users/${userId}`);
  return response.data;
};

export default fetchUserApi;
