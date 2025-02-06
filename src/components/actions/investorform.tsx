import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import { submitInvestorForm } from "../../services/InvesterService";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Investorform: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    investorName: "",
    investorJob: "",
    investorInterest: "",
    otherDetails: "",
    budgetLimit: "",
    address: "",
    telNumber: "",
    imageFile: null as File | null,
    userId: "", 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, imageFile: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = sessionStorage.getItem("userId");
    if (userId) {
      const updatedFormData = {
        ...formData,
        userId,
        investmentId: "", // Add appropriate value
        investorId: "", // Add appropriate value
        imageName: formData.imageFile ? formData.imageFile.name : "",
        contentType: formData.imageFile ? formData.imageFile.type : ""
      };
      await submitInvestorForm(updatedFormData, userId, navigate);
    } else {
      console.error("User ID is null");
    }
  };


  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
    if (!formData.investorName) tempErrors.investorName = "Investor Name is required";
    if (!formData.investorJob) tempErrors.investorJob = "Investor Job is required";
    if (!formData.investorInterest) tempErrors.investorInterest = "Investor Interest is required";
    if (!formData.budgetLimit) tempErrors.budgetLimit = "Budget Limit is required";
    if (!formData.address) tempErrors.address = "Address is required";
    if (!formData.telNumber) {
      tempErrors.telNumber = "Telephone Number is required";
    } else if (!/^0\d{9}$/.test(formData.telNumber)) {
      tempErrors.telNumber = "Telephone number must start with 0 and be exactly 10 digits";
    }
    if (!formData.imageFile) {
      tempErrors.imageFile = "Image upload is required";
    } else if (!formData.imageFile.type.startsWith("image/")) {
      tempErrors.imageFile = "Only image files are allowed";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };


  return (
    <>
    <Header />
    <div className="container my-5">
      <h2 className="text-center mb-4">Add Investor Details</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="mb-3">
          <label htmlFor="investorName" className="form-label">Investor Name</label>
          <input type="text" className="form-control" id="investorName" name="investorName" value={formData.investorName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="investorJob" className="form-label">Investor Job</label>
          <input type="text" className="form-control" id="investorJob" name="investorJob" value={formData.investorJob} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="investorInterest" className="form-label">Investor Interest</label>
          <input className="form-control" id="investorInterest" name="investorInterest" value={formData.investorInterest} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="otherDetails" className="form-label">Other Details</label>
          <input className="form-control" id="otherDetails" name="otherDetails" value={formData.otherDetails} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="budgetLimit" className="form-label">Budget Limit</label>
          <input type="text" className="form-control" id="budgetLimit" name="budgetLimit" value={formData.budgetLimit} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="telNumber" className="form-label">Telephone Number</label>
          <input type="text" className="form-control" id="telNumber" name="telNumber" value={formData.telNumber} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="imageFile" className="form-label">Upload Image</label>
          <input type="file" className="form-control" id="imageFile" onChange={handleFileChange} required />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success w-100">Submit</button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Investorform;