import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import Conta from "./pages/Conta";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/conta" element={<Conta />} /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
