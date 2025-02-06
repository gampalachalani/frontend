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
      const userEmail = response.data.userEmail;
      const firstName = response.data.firstName;
      const userId = response.data.userId;
      const role = response.data.role;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('userEmail', userEmail);
      sessionStorage.setItem('firstName', firstName);
      sessionStorage.setItem('userId', userId);
      sessionStorage.setItem('role', role);
      return response.data;
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
  sessionStorage.removeItem('token'); 
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userEmail');
  sessionStorage.removeItem('firstName');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('role');
  window.location.href = '/login';
};


export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
    console.log(response.data)
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data.length;
    console.log(response.data)
  } catch (error) {
    console.error("Error fetching users:", error);
    return 0;
  }
};

export const deleteUser = async (id: string) => {
  const response = await axios.delete(`${API_URL}/delete/${id}`);
  return response.data;
};

