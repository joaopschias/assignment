import axios from 'axios';

const loginApi = async credentials => {
  const response = await axios.post('/api/login', credentials);
  return response.data;
};

export default loginApi;
