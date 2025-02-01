import React, { useState } from "react";
import { addProject } from "../../services/Funding";

const FundingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    targetAmount: "",
    currentAmount: "",
    projectOwnerId: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "targetAmount" || name === "currentAmount" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addProject(formData);
      alert("Project added successfully!");
      setFormData({
        projectName: "",
        description: "",
        targetAmount: "",
        currentAmount: "",
        projectOwnerId: "",
      });
    } catch (error) {
      alert("Failed to add project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="mb-3 text-center">Add Funding Project</h2>
        {message && <div className="alert alert-info">{message}</div>}
        
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Project Name</label>
            <input
              type="text"
              className="form-control"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Target Amount</label>
            <input
              type="number"
              className="form-control"
              name="targetAmount"
              value={formData.targetAmount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Current Amount</label>
            <input
              type="number"
              className="form-control"
              name="currentAmount"
              value={formData.currentAmount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Project Owner ID</label>
            <input
              type="text"
              className="form-control"
              name="projectOwnerId"
              value={formData.projectOwnerId}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Submitting..." : "Submit Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FundingForm;
