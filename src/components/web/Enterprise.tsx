import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllEnterprises } from "../../services/EnterpriceService";
import { EnterpriseFormData } from "../../interfaces/EnterpriseFormData";

const EnterpriseList: React.FC = () => {
  const [enterprises, setEnterprises] = useState<EnterpriseFormData[]>([]);

  useEffect(() => {
    const fetchEnterprises = async () => {
      const data = await getAllEnterprises();
      setEnterprises(data);
      console.log(data);
    };
    fetchEnterprises();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Enterprise List</h2>
      <div className="row">
        {enterprises.length > 0 ? (
          enterprises.map((enterprise) => (
            <div key={enterprise.enterpriseId} className="col-md-4">
              <div className="card mb-3 shadow">
                {enterprise.imageFile && (
                  <img
                    src={`data:${enterprise.contentType};base64,${enterprise.imageFile}`}
                    className="card-img-top"
                    alt={enterprise.imageName}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  
                )}
                <div className="card-body">
                  <h5 className="card-title">{enterprise.enterpriseName}</h5>
                  <p className="card-text">
                    <strong>Type:</strong> {enterprise.enterpriseType}
                  </p>
                  <p className="card-text">
                    <strong>Register #:</strong> {enterprise.registerNumber}
                  </p>
                  <p className="card-text">
                    <strong>Founded:</strong> {enterprise.startingDate}
                  </p>
                  <p className="card-text">
                    <strong>Address:</strong> {enterprise.address}, {enterprise.city}
                  </p>
                  <p className="card-text">
                    <strong>Contact:</strong> {enterprise.telNumber}
                  </p>
                  <p className="card-text">
                    <strong>Email:</strong> {enterprise.enterpriseEmail}
                  </p>
                    <a href={enterprise.webUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer"> Visit Website </a>
                    <a href={`/entpProfile/${enterprise.enterpriseId}`} className="btn btn-outline-dark mx-2" rel="noopener noreferrer"> View Profile </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No enterprises available.</p>
        )}
      </div>
    </div>
  );
};

export default EnterpriseList;