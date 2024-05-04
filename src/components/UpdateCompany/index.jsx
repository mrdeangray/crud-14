import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CompanyContext } from "../../context/CompanyProvider";
import { Link, useNavigate, useParams } from "react-router-dom";

const Input = styled.input`
  border: 1px solid blue;
  border-radius: 5px;
`;

const Msg = styled.p`
  color: blue;
  font-size: 30px;
`;

const UpdateCompany = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { companies, setCompanies } = useContext(CompanyContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currCompany, setCurrCompany] = useState({});

  useEffect(() => {
    const curr = companies.find((company) => company.id === id);
    setCurrCompany(curr);
    setInputValue(curr.name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCompanies = companies.map((company) => {
      if (company.id === id) {
        company.name = inputValue;
      }
      return company;
    });
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
      <h6>Update: {currCompany.name}</h6>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleChange} autoFocus />
      </form>
      {companies.map((company) => {
        return <span key={company.id}>{company.name}, </span>;
      })}

      {isUpdating && <Msg>Updating...</Msg>}
    </div>
  );
};

export default UpdateCompany;
