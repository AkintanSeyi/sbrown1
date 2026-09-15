import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate , useLocation } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header"
import Termsandcondition from "./component/Termsandcondition";
import Privacy from "./component/Privacy";
import Others from "./component/Others";
import Socials from "./component/Socials";
import Donate from "./component/Donate";



const Layout = () => {
  const location = useLocation();

  const hideHeader =
    location.pathname ===
    "/actblue/sherrod-brown-for-senate/donate-today/653898598083884832845";

  return (
    <>
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Termsandcondition />} />
         <Route path="/privacypolicy" element={<Privacy />} />
         <Route path="/our-fight" element={<Others />} />
          <Route path="/donate" element={<Donate />} />
           <Route path="/socials" element={<Socials />} />
        {/* 
        <Route path="/about" element={<Meetkenpaxton />} />
        <Route path="/paxton-s-patriots" element={<Join />} />
        <Route
          path="/winred/ken-paxton-for-senate/donate-today/653898598083884832845"
          element={<Donate />}
        /> */}
      </Routes>
    </>
  );
};


const App = () => {
  return (
    <BrowserRouter>
     
       <Layout />
    
    </BrowserRouter>
  );
};

export default App;
