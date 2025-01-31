import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Entrepreneurform = () => {
    const userId = useParams<{ userId: string }>().userId;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId:"",
    investorName: "",
    investorJob: "",
    investorInterest: "",
    otherDetails: "",
    budgetLimit: "",
    address: "",
    telNumber: "",
    imageFile: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        imageFile: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("investment", JSON.stringify({
      userId: userId,
      investorName: formData.investorName,
      investorJob: formData.investorJob,
      investorInterest: formData.investorInterest,
      otherDetails: formData.otherDetails,
      budgetLimit: formData.budgetLimit,
      address: formData.address,
      telNumber: formData.telNumber,
    }));

    if (formData.imageFile) {
      data.append("imageFile", formData.imageFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/investment/add",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/login");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data", error);
      alert("Failed to submit investor data.");
    }
};

    return (
    <div className="container my-5">
        <h2 className="text-center mb-4">Add Investor Details</h2>
        <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
          <div className="mb-3">
            <label htmlFor="investorName" className="form-label">
              Investor Name
            </label>
            <input
              type="text"
              className="form-control"
              id="investorName"
              name="investorName"
              value={formData.investorName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="investorJob" className="form-label">
              Investor Job
            </label>
            <input
              type="text"
              className="form-control"
              id="investorJob"
              name="investorJob"
              value={formData.investorJob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="investorInterest" className="form-label">
              Investor Interest
            </label>
            <input
              className="form-control"
              id="investorInterest"
              name="investorInterest"
              value={formData.investorInterest}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="otherDetails" className="form-label">
              Other Details
            </label>
            <input
              className="form-control"
              id="otherDetails"
              name="otherDetails"
              value={formData.otherDetails}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="budgetLimit" className="form-label">
              Budget Limit
            </label>
            <input
              type="text"
              className="form-control"
              id="budgetLimit"
              name="budgetLimit"
              value={formData.budgetLimit}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telNumber" className="form-label">
              Telephone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="telNumber"
              name="telNumber"
              value={formData.telNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageFile" className="form-label">
              Upload Image
            </label>
            <input
              type="file"
              className="form-control"
              id="imageFile"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default Entrepreneurform;