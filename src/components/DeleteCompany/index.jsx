import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CompanyContext } from "../../context/CompanyProvider";
import { Link, useNavigate, useParams } from "react-router-dom";

const Msg = styled.p`
  color: blue;
  font-size: 30px;
`;

const DeleteCompany = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { companies, setCompanies } = useContext(CompanyContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currCompany, setCurrCompany] = useState({});

  useEffect(() => {
    const curr = companies.find((company) => company.id === id);
    setCurrCompany(curr);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (event) => {
    event.preventDefault();

    const newCompanies = companies.filter((company) => company.id !== id);
    setCompanies(newCompanies);
    localStorage.setItem("crud-14-companies", JSON.stringify(newCompanies));
    setIsUpdating(true);
    setTimeout(() => {
      navigate(`/`);
      setIsUpdating(false);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>Delete: {currCompany.name}</h6>
      <button onClick={handleDelete}>Delete: {currCompany.name}</button>
      <div>
        {companies.map((company) => {
          return <span key={company.id}>{company.name}, </span>;
        })}
      </div>
      {isUpdating && <Msg>Deleting...</Msg>}
    </div>
  );
};
export default DeleteCompany;
