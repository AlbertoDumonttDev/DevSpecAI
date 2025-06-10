import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const requestGenerateSpec = async (data) => {
  try {
    const response = await api.post('/api/spec', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Network Error');
  }
};