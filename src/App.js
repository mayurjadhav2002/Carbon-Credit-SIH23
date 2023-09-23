import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from './Components/miscellaneous/Home';
import Navbar from './Components/miscellaneous/Navbar';
import Contact from './Components/miscellaneous/Contact';
import Error from "./Components/miscellaneous/Error";
import './App.css';
import Login from "./Components/Auth/Login";
import Company from "./Components/govt/Company";
import CompanyData from "./Components/govt/CompanyData";
import CompanyIndex from "./Components/Company/CompanyIndex";
import Data from './Components/Company/Data'
import BuyCredits from "./Components/Company/BuyCredits";
import PollutionGraph from './Components/miscellaneous/PollutonGraph'
import Certificate from "./Components/Company/Certificate";
import GovtCertificate from "./Components/govt/GovtCertificate";
import GenerateCerticate from "./Components/govt/utils/GenerateCerticate";
function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />

        {/* Government */}
        <Route path='/govt/dashboard' element={<Company />} />
        <Route path='/govt/company/data' element={<CompanyData />} />
        <Route path='/govt/company/certificates' element={<GovtCertificate />} />

        {/* Company */}
        <Route path='/company/data' element={<Data />} />
        <Route path='/company' element={<CompanyIndex />} />
        <Route path='/company/licence-transaction' element={<BuyCredits />} />

        <Route path='/company/certificate' element={<Certificate />} />
<Route path="/govt/company/certificates/generate" element={<GenerateCerticate />}></Route>


        {/* Miscellanous */}

        <Route path='/demo/map' element={<PollutionGraph />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
