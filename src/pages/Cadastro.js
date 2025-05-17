import React, { useEffect } from "react";
import "./Cadastro.css";

function Cadastro() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#000";
    document.documentElement.style.overflowX = "hidden";
  }, []);

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
        padding: "20px"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(83, 35, 95, 0.95)",
          padding: "40px",
          borderRadius: "16px",
          maxWidth: "420px",
          width: "100%",
          boxShadow: "0 12px 24px rgba(0,0,0,0.4)",
          color: "#fff",
          animation: "fadeIn 1.2s ease"
        }}
      >
        <h2 style={{ marginBottom: "24px", fontWeight: "700" }}>Crie sua conta</h2>

        <input
          type="text"
          placeholder="Seu nome"
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          style={inputStyle}
        />
        <input
          type="tel"
          placeholder="Seu telefone"
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Sua senha"
          style={inputStyle}
        />

        <button
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
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => (e.target.style.opacity = 0.85)}
          onMouseOut={(e) => (e.target.style.opacity = 1)}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "16px",
  borderRadius: "6px",
  border: "none",
  fontSize: "1rem"
};

export default Cadastro;
