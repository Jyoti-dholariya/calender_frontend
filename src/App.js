import React from "react";
import Registration from "./Registration";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Caldata from "./Caldata";
import Navbar from "./Navbar";
import Getall from "./Getall";
import Katha from "./Katha";
import City from './City';
import Cityadd from "./Cityadd";


const App = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registeration" element={<Registration />} />
          <Route path="/caldata" element={<Caldata/>} />
          <Route path="/getall" element={<Getall/>} />
          <Route path="/katha" element={<Katha/>} />
          <Route path="/city" element={<City/>} />
          <Route path="/cityadd" element={<Cityadd/>} />
        </Routes>
     
    </>
  );
};

export default App;
