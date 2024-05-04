import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CompanyContext } from "../../context/CompanyProvider";
import Company from "../Company";
import "./read-companies.css";

const ReadCompanies = () => {
  const { companies } = useContext(CompanyContext);
  return (
    <div className="container">
      <div className="header">
        <h6>ReadCompanies</h6>
      </div>
      <div className="left-side"></div>
      <div className="main">
        {companies.map((company) => {
          return <Company key={company.id} company={company} />;
        })}
        <Link to={`/create`}>
          <button>Create Company</button>
        </Link>
      </div>
      <div className="right-side"></div>
      <div className="footer"></div>
    </div>
  );
};

export default ReadCompanies;
