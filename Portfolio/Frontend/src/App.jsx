import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";

import Seemessagedel from "./Pages/Seemessagedel";
import AdminRegister from "./Pages/AdminRegister";
import Login from "./Pages/Login";
import Adminpage from "./Pages/Adminpage";

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element= {<AdminRegister/>}/>
        <Route path="/del/:id" element={<Seemessagedel />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/addminm" element={<Adminpage/>} />
        <Route path="/adminregiter" element={<AdminRegister/>}/>

        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
