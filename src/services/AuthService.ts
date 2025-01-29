import axios from 'axios';

const API_URL = 'http://localhost:8080/api/user';

interface ErrorResponse {
    message?: string;
  }

export const register = async (user: { userEmail: string; firstName: string; lastName: string; password: string; }): Promise<string> => {
    try {
      const response = await axios.post(`${API_URL}/signup`, user);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response.data as ErrorResponse;
        throw errorData.message || 'Error during registration';
      } else {
        throw 'Error during registration';
      }
    }
};
  

export const login = async (credentials: { userEmail: string; password: string }): Promise<string> => {
    try {
      const response = await axios.post(`${API_URL}/signing`, credentials);
      const token = response.data.token;
      localStorage.setItem('token', token);
      return token;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response.data as ErrorResponse;
        throw errorData.message || 'Error during login';
      } else {
        throw 'Error during login';
      }
    }
};
  

export const logout = (): void => {
  localStorage.removeItem('token'); 
};
