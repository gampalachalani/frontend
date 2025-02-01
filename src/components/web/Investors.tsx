import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InvestorFormData } from "../../interfaces/InvestorFormData";
import { getAllInvesters } from "../../services/InvesterService";

const InvestorList: React.FC = () => {
  const [investors, setInvestors] = useState<InvestorFormData[]>([]);

  useEffect(() => {
    const fetchInvestors = async () => {
      const data = await getAllInvesters();
      setInvestors(data);
      console.log(data);
    };
    fetchInvestors();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Investor List</h2>
      <div className="row">
        {investors.length > 0 ? (
          investors.map((investor) => (
            <div key={investor.investmentId} className="col-md-4">
              <div className="card mb-3 shadow">
                {investor.imageFile && (
                  <img
                    src={`data:${investor.contentType};base64,${investor.imageFile}`}
                    className="card-img-top"
                    alt={investor.imageName}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{investor.investorName}</h5>
                  <p className="card-text">
                    <strong>Contact:</strong> {investor.telNumber}
                  </p>
                  <p className="card-text">
                    <strong>Company:</strong> {investor.investorInterest}
                  </p>
                  <a href={`/invsProfile/${investor.investmentId}`} className="btn btn-primary">View Profile</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No investors available.</p>
        )}
      </div>
    </div>
  );
};

export default InvestorList;
