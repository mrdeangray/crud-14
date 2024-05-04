import { Route, Routes } from "react-router-dom";
import "./App.css";
import CompanyProvider from "./context/CompanyProvider";
import ReadCompanies from "./components/ReadCompanies";
import CreateCompany from "./components/CreateCompany";
import UpdateCompany from "./components/UpdateCompany";
import DeleteCompany from "./components/DeleteCompany";

function App() {
  return (
    <div className="App">
      <CompanyProvider>
        <Routes>
          <Route exact path="/" element={<ReadCompanies />} />
          <Route exact path="/create" element={<CreateCompany />} />
          <Route exact path="/update/:id" element={<UpdateCompany />} />
          <Route exact path="/delete/:id" element={<DeleteCompany />} />
        </Routes>
      </CompanyProvider>
    </div>
  );
}

export default App;
