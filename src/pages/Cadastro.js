import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cadastro.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#000";
    document.documentElement.style.overflowX = "hidden";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposta = await axios.post("https://grupo-reune-backend.onrender.com/api/cadastrar", {
        nome,
        email,
        telefone,
        senha,
      });

      if (resposta.data.success) {
        localStorage.setItem("usuario", JSON.stringify(resposta.data.usuario));
        window.location.href = "https://painel.gruporeune.com";
      } else {
        setErro(resposta.data.message || "Erro no cadastro.");
      }
    } catch (error) {
      setErro("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/assets/bg-cadastro.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(83, 35, 95, 0.95)",
          padding: "40px",
          borderRadius: "16px",
          maxWidth: "420px",
          width: "100%",
          boxShadow: "0 12px 24px rgba(0,0,0,0.4)",
          color: "#fff",
          animation: "fadeIn 1.2s ease",
        }}
      >
        <h2 style={{ marginBottom: "24px", fontWeight: "700" }}>Crie sua conta</h2>

        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="tel"
          placeholder="Seu telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={inputStyle}
          required
        />

        {erro && (
          <p style={{ color: "#f39c12", fontSize: "0.9rem", marginTop: "10px" }}>
            {erro}
          </p>
        )}

        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #f1c40f, #f39c12)",
            color: "#000",
            padding: "12px 24px",
            width: "100%",
            border: "none",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "1rem",
            marginTop: "20px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.opacity = 0.85)}
          onMouseOut={(e) => (e.target.style.opacity = 1)}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "16px",
  borderRadius: "6px",
  border: "none",
  fontSize: "1rem",
};

export default Cadastro;
