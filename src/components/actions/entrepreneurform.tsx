import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EnterpriseFormData } from "../../interfaces/EnterpriseFormData";
import { submitEnterpriseForm } from "../../services/EnterpriceService";

const EnterpriseForm: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<EnterpriseFormData>({
    userId: userId || "",
    enterpriseId: "",
    enterpriseName: "",
    enterpriseEmail: "",
    registerNumber: "",
    enterpriseType: "",
    startingDate: "",
    address: "",
    city: "",
    telNumber: "",
    webUrl: "",
    imageFile: null as File | null,
    imageName: "",
    contentType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, imageFile: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = sessionStorage.getItem("userId");
    if (userId) {
      await submitEnterpriseForm(formData, userId, navigate);
    } else {
      alert("User ID is missing!");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Add Enterprise Details</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Enterprise Name</label>
          <input type="text" className="form-control" name="enterpriseName" value={formData.enterpriseName} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Enterprise Email</label>
          <input type="email" className="form-control" name="enterpriseEmail" value={formData.enterpriseEmail} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Register Number</label>
          <input type="text" className="form-control" name="registerNumber" value={formData.registerNumber} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Enterprise Type</label>
          <input type="text" className="form-control" name="enterpriseType" value={formData.enterpriseType} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Starting Date</label>
          <input type="date" className="form-control" name="startingDate" value={formData.startingDate} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Telephone Number</label>
          <input type="text" className="form-control" name="telNumber" value={formData.telNumber} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Website URL</label>
          <input type="text" className="form-control" name="webUrl" value={formData.webUrl} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input type="file" className="form-control" onChange={handleFileChange} required />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success w-100">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EnterpriseForm;