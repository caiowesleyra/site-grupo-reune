// src/App.js
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const usuarioParam = params.get("usuario");

    if (usuarioParam) {
      try {
        const usuario = JSON.parse(decodeURIComponent(usuarioParam));
        localStorage.setItem("usuario", JSON.stringify(usuario)); // <-- ESSENCIAL
        console.log("✅ usuario salvo:", usuario);
        window.history.replaceState({}, document.title, window.location.pathname);
        navigate("/sucesso"); // redireciona após login
      } catch (err) {
        console.error("❌ Erro ao salvar usuario:", err);
      }
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default App;
