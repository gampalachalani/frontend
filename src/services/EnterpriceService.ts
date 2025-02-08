import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { EnterpriseFormData } from "../interfaces/EnterpriseFormData";

const API_URL = "http://localhost:8080/api/enterprise";

export const submitEnterpriseForm = async (
  formData: EnterpriseFormData,
  userId: string,
  navigate: NavigateFunction
) => {
  try {
    const data = new FormData();

    data.append(
      "enterprise",
      JSON.stringify({
        userId: userId,
        enterpriseName: formData.enterpriseName,
        enterpriseEmail: formData.enterpriseEmail,
        registerNumber: formData.registerNumber,
        enterpriseType: formData.enterpriseType,
        startingDate: formData.startingDate,
        address: formData.address,
        city: formData.city,
        telNumber: formData.telNumber,
        webUrl: formData.webUrl,
      })
    );

    if (formData.imageFile) {
      data.append("imageFile", formData.imageFile);
    }

    await axios.post(`${API_URL}/add`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Enterprise details added successfully!");
    navigate("/"); 
  } catch (error) {
    console.error("Error submitting enterprise form:", error);
    alert("Failed to add enterprise details.");
  }
};


export const getAllEnterprises = async () => {
  try {
    const response = await fetch(`${API_URL}/getAll`);
    if (!response.ok) throw new Error("Failed to fetch enterprises");
    return await response.json();
  } catch (error) {
    console.error("Error fetching enterprises:", error);
    return [];
  }
};

export const getEnterpriseById = async (enterpriseId: string) => {
  try {
    const response = await fetch(`${API_URL}/getEnterpriseById/${enterpriseId}`);
    if (!response.ok) throw new Error("Failed to fetch enterprise");
    return await response.json();
  } catch (error) {
    console.error("Error fetching enterprises:", error);
    return [];
  }
};

export const getEnterpriseCount = async () => {
  try {
    const response = await fetch(`${API_URL}/getAll`);
    if (!response.ok) throw new Error("Failed to fetch enterprises");
    const enterprises = await response.json();
    return enterprises.length; // Returns the count of enterprises
  } catch (error) {
    console.error("Error fetching enterprises:", error);
    return 0;
  }
};

export const deleteNotification = async (id: string) => {
  const response = await axios.delete(`${API_URL}/deleteEnterprise/${id}`);
  return response.data;
};

export const updateEnterprise = async (enterpriseId: string, updatedData: any) => {
  try {
    const response = await axios.put(`${API_URL}/updateEnterprise/${enterpriseId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating enterprise:", error);
    return null;
  }
};

export const getEnterpriseByUserId = async () => {
  try {
    const response = await axios.get(`${API_URL}/getEnterpriseByUserId/${sessionStorage.getItem("userId")}`);
    if(response.data){
      return true;
    }
  } catch (error) {
    console.error("Error fetching enterprise data:", error);
    return false;
  }
};