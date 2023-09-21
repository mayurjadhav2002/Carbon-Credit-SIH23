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

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />

        <Route path='/contact' element={<Contact />} />
        <Route path='/govt/dashboard' element={<Company />} />
        <Route path='/govt/company/data' element={<CompanyData />} />

        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
