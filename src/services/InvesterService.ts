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
      navigate("/");
    } catch (error) {
      console.error("Error submitting data", error);
      alert("Failed to submit investor data.");
    }
};