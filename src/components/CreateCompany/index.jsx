import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CompanyContext } from "../../context/CompanyProvider";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const Input = styled.input`
  border: 1px solid blue;
  border-radius: 5px;
`;

const Msg = styled.p`
  color: blue;
  font-size: 30px;
`;

const CreateCompany = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { companies, setCompanies } = useContext(CompanyContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const company = {};
    company.id = uuid();
    company.score = 0;
    company.name = inputValue;
    const newCompanies = [...companies, company];
    setCompanies(newCompanies);
    localStorage.setItem("crud-14-companies", JSON.stringify(newCompanies));
    setInputValue("");
    setIsUpdating(true);
    setTimeout(() => {
      navigate(`/`);
      setIsUpdating(false);
    }, 2000);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>Create</h6>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleChange} autoFocus />
      </form>
      {companies.map((company) => {
        return <span key={company.id}>{company.name}, </span>;
      })}

      {isUpdating && <Msg>Creating...</Msg>}
    </div>
  );
};

export default CreateCompany;
