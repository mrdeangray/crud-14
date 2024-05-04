import React, { createContext, useEffect, useState } from "react";

export const CompanyContext = createContext(null);

const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const savedCompanies =
      JSON.parse(localStorage.getItem("crud-14-companies")) || [];
    setCompanies(savedCompanies);
  });

  return (
    <CompanyContext.Provider value={{ companies, setCompanies }}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;
