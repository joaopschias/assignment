import api from '@/app/interceptor';

const loginApi = async credentials => {
  const response = await api.post('/api/login', credentials);
  return response.data;
};

export default loginApi;
