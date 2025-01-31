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

    // Wrapping all fields inside an "enterprise" JSON key
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
    navigate("/"); // Redirect after success
  } catch (error) {
    console.error("Error submitting enterprise form:", error);
    alert("Failed to add enterprise details.");
  }
};