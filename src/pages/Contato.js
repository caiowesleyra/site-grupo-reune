import React from "react";

function Contato() {
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem"
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#00b894",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
  };

  return (
    <div>
      {/* SEÇÃO DE CONTATO COM BACKGROUND */}
      <section
        style={{
          backgroundImage: "url('/assets/contato-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "100px 20px",
          color: "white",
          textAlign: "left",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto", backgroundColor: "rgba(0,0,0,0.5)", padding: "40px", borderRadius: "16px" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px" }}>
            Entre em Contato
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
            Tem alguma dúvida ou quer saber mais? Fale conosco através do formulário ou dos nossos canais de comunicação.
          </p>

          <form method="POST" action="https://grupo-reune-backend-production.up.railway.app/api/login">
            <input type="text" name="nome" placeholder="Seu nome" style={inputStyle} required />
            <input type="email" name="email" placeholder="Seu e-mail" style={inputStyle} required />
            <textarea name="mensagem" placeholder="Sua mensagem" rows="5" style={inputStyle} required />
            <button type="submit" style={buttonStyle}>
              Enviar mensagem
            </button>
          </form>

          {/* Contatos diretos */}
          <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", color: "#fff" }}>
            <div style={{ marginBottom: "20px" }}>
              <strong>Email:</strong><br />
              gruporeune@gmail.com
            </div>
            <div>
              <strong>WhatsApp:</strong><br />
              <a href="https://chat.whatsapp.com/GjASDU9g09VFIPkC2F6Dry" target="_blank" rel="noopener noreferrer" style={{ color: "#f1c40f", textDecoration: "none" }}>
                Participar do grupo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contato;
