import axios from "axios";
const API_URL = "http://localhost:8080/api/funding";

export const addProject = async (projectData: {
    projectName: string;
    description: string;
    targetAmount: string;
    currentAmount: string;
    projectOwnerId: string;
}) => {
    try {
      const response = await axios.post(`${API_URL}/add`, projectData);
  
      if (!response) {
        throw new Error("Failed to add project");
      }
  
      return response.data;
    } catch (error) {
      console.error("Error adding project:", error);
      throw error;
    }
};

export const getAllFunds = async () => {
  try {
    const response = await fetch(`${API_URL}/getAll`);
    if (!response.ok) throw new Error("Failed to fetch enterprises");
    return await response.json();
  } catch (error) {
    console.error("Error fetching enterprises:", error);
    return [];
  }
};
  