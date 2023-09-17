import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import Home from './Components/miscellaneous/Home';
import Navbar from './Components/miscellaneous/Navbar';
import Contact from './Components/miscellaneous/Contact';
import Error from "./Components/miscellaneous/Error";
import './App.css';
import Login from "./Components/Auth/Login";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />

        <Route path='/contact' element={<Contact />} />

        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
