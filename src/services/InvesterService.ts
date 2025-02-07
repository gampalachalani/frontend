import axios from "axios";
import { InvestorFormData } from "../interfaces/InvestorFormData";

const API_URL = "http://localhost:8080/api/investment";

export const submitInvestorForm = async (
    formData: InvestorFormData,
    userId: string,
    navigate: (path: string) => void
  ): Promise<void> => {
    const data = new FormData();
    data.append(
      "investment",
      JSON.stringify({
        userId: userId,
        investorName: formData.investorName,
        investorJob: formData.investorJob,
        investorInterest: formData.investorInterest,
        otherDetails: formData.otherDetails,
        budgetLimit: formData.budgetLimit,
        address: formData.address,
        telNumber: formData.telNumber,
      })
    );
  
    if (formData.imageFile) {
      data.append("imageFile", formData.imageFile);
    }
  
    try {
      await axios.post(`${API_URL}/add`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/login");
    } catch (error) {
      console.error("Error submitting data", error);
      alert("Failed to submit investor data.");
    }
};

export const getAllInvesters = async () => {
  try {
    const response = await fetch(`${API_URL}/getAllInvestors`);
    if (!response.ok) throw new Error("Failed to fetch invester");
    return await response.json();
  } catch (error) {
    console.error("Error fetching enterprises:", error);
    return [];
  }
};

export const getInvestorById = async (investorId: string) => {
  try {
    const response = await fetch(`${API_URL}/getInvestmentByInvestmentId/${investorId}`);
    if (!response.ok) throw new Error("Failed to fetch investor");
    return await response.json();
  } catch (error) {
    console.error("Error fetching investors:", error);
    return [];
  }
};

export const getInvestorCount = async () => {
  try {
    const response = await fetch(`${API_URL}/getAllInvestors`);
    if (!response.ok) throw new Error("Failed to fetch investors");
    const investors = await response.json();
    return investors.length; // Returns the count of investors
  } catch (error) {
    console.error("Error fetching investors:", error);
    return 0;
  }
};

export const deleteInvester = async (id: string) => {
  const response = await axios.delete(`${API_URL}/deleteInvestment/${id}`);
  return response.data;
};