// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import ProjetosSociais from "./pages/ProjetosSociais";
import Fundador from "./pages/Fundador";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import SiteLayout from "./components/SiteLayout";

function App() {
  return (
    <Router>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos-sociais" element={<ProjetosSociais />} />
          <Route path="/fundador" element={<Fundador />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </SiteLayout>
    </Router>
  );
}

export default App;
