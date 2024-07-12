import api from '@/app/interceptor';

export const getAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

const fetchUserApi = async userId => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

export default fetchUserApi;
