import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEnterpriseById, updateEnterprise } from "../../services/EnterpriceService"
import "../styles/Entreform.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import cmplogo from "../assets/logo1.png";

const UpdateEnterpriseForm: React.FC = () => {
  const { enterpriseId } = useParams<{ enterpriseId: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
  });

  useEffect(() => {
    if (enterpriseId) {
      const fetchEnterprise = async () => {
        const data = await getEnterpriseById(enterpriseId);
        if (data) {
          setFormData({
            enterpriseId: data.enterpriseId || "",
            enterpriseName: data.enterpriseName || "",
            enterpriseEmail: data.enterpriseEmail || "",
            registerNumber: data.registerNumber || "",
            enterpriseType: data.enterpriseType || "",
            startingDate: data.startingDate || "",
            address: data.address || "",
            city: data.city || "",
            telNumber: data.telNumber || "",
            webUrl: data.webUrl || "",
            imageFile: null, 
          });
        }
      };
      fetchEnterprise();
    }
  }, [enterpriseId]);

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
    const updatedEnterprise = { ...formData };

    const result = await updateEnterprise(enterpriseId!, updatedEnterprise);
    if (result) {
      alert("Enterprise updated successfully!");
      navigate("/enterprise");
    }
  };

  return (
    <>
      <Header />
      <div className="entreform">
        <div className="entreform-container">

          <div className="cmp-logo">
            <img src={cmplogo} alt="Company Logo" />
          </div>

          <div className="entreform-box">
            <form onSubmit={handleSubmit}>
              <h1>Update Enterprise</h1>

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

              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateEnterpriseForm;