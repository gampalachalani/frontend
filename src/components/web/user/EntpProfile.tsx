import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EnterpriseFormData } from "../../../interfaces/EnterpriseFormData";
import { getEnterpriseById } from "../../../services/EnterpriceService";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import axios from "axios";

const EntpProfile: React.FC = () => {
  const [enterprise, setEnterprise] = useState<EnterpriseFormData | null>(null);
  const [investorName, setInvestorName] = useState<string>("Investor Name"); 
  const [investorEmail, setInvestorEmail] = useState<string>("investor@example.com"); 
  const { enterpriseId } = useParams<{ enterpriseId: string }>();

  useEffect(() => {
    const fetchEnterprise = async () => {
      if (enterpriseId) {
        const data = await getEnterpriseById(enterpriseId);
        setEnterprise(data);
      } else {
        console.error("Enterprise ID is undefined");
      }
    };
    fetchEnterprise();
  }, [enterpriseId]);

  const handleConnect = async () => {
    if (enterprise) {
      try {
        const response = await axios.post("http://localhost:8080/api/email/send", {
          recipient: enterprise.enterpriseEmail, 
          name: investorName,
          message: `${investorName} is interested in collaborating with your enterprise.`,
          projectId: enterpriseId,
        });
        alert("Collaboration request sent successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send collaboration request. Please try again.");
      }
    }
  };

  return (
    <div className="main-content">
      
      <Header />
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/abstract-image-digital-handshake-representing-connection-partnership-business-context_955712-37083.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-default opacity-8"></span>
        <div className="container-fluid d-flex align-items-center mx-5">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <h1 className="display-2 text-white">{enterprise?.enterpriseName}</h1>
              <p className="text-white mt-0 mb-5">Welcome to the enterprise profile page.</p>
              <a href="#" className="btn btn-info">
                Edit profile
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Content */}
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0 mt-5">
            <div className="card card-profile shadow">
              <div className="card-body text-center">
                {enterprise && enterprise.imageFile && (
                  <img
                    src={`data:${enterprise.contentType};base64,${enterprise.imageFile}`}
                    className="card-img-top rounded"
                    alt={enterprise.imageName}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <h3 className="mt-3">{enterprise?.enterpriseName}</h3>
                <p className="text-muted">{enterprise?.enterpriseType}</p>
                <p>{enterprise?.city}</p>
                <a href="#" className="btn btn-sm btn-info mr-4" onClick={handleConnect}>
                  Connect
                </a>
                <a href="#" className="btn btn-sm btn-default">
                  Message
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-8 order-xl-1 mb-5 mt-5">
            <div className="card bg-white shadow p-4">
              <div className="card-header bg-white border-0">
                <h3 className="mb-0">Enterprise Details</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <p><strong>Email:</strong> {enterprise?.enterpriseEmail}</p>
                    <p><strong>Register Number:</strong> {enterprise?.registerNumber}</p>
                    <p><strong>Enterprise Type:</strong> {enterprise?.enterpriseType}</p>
                  </div>
                  <div className="col-md-6">
                    <p><strong>Starting Date:</strong> {enterprise?.startingDate}</p>
                    <p><strong>Address:</strong> {enterprise?.address}, {enterprise?.city}</p>
                    <p><strong>Phone:</strong> {enterprise?.telNumber}</p>
                    <p><strong>Website:</strong> <a href={enterprise?.webUrl} target="_blank" rel="noopener noreferrer">{enterprise?.webUrl}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
};

export default EntpProfile;