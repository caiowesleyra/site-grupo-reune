import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Mostra o card com delay para animação de entrada
    setTimeout(() => setShowCard(true), 100);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resposta = await axios.post("http://localhost:5000/api/login", {
        email,
        senha,
      });

      if (resposta.data.success) {
  localStorage.setItem("usuario", JSON.stringify(resposta.data.usuario));
  window.location.href = "https://painel.gruporeune.com"; // redireciona direto pro painel
      } else {
        setErro(resposta.data.message);
      }
    } catch (error) {
      setErro("Erro ao tentar fazer login. Verifique os dados.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0c0f1a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1c1f2a",
          padding: "60px 50px",
          borderRadius: "20px",
          boxShadow: "0 15px 45px rgba(0,0,0,0.6)",
          width: "100%",
          maxWidth: "520px",
          textAlign: "center",
          transform: showCard ? "scale(1)" : "scale(0.9)",
          opacity: showCard ? 1 : 0,
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <img
          src="/assets/logo-reune.png"
          alt="Logo REUNE"
          style={{ width: "100px", marginBottom: "30px" }}
        />
        <h2 style={{ color: "#fff", marginBottom: "35px", fontSize: "2.2rem" }}>
          Bem-vindo de volta
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputEstilizado}
          />
          <input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            style={inputEstilizado}
          />
          {erro && (
            <p style={{ color: "#ff7675", marginBottom: "15px" }}>{erro}</p>
          )}
          <button
            type="submit"
            style={botaoEstilizado}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#019875")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#00b894")
            }
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

const inputEstilizado = {
  width: "100%",
  padding: "16px",
  marginBottom: "22px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#2d3242",
  color: "#fff",
  fontSize: "1.1rem",
};

const botaoEstilizado = {
  width: "100%",
  padding: "16px",
  backgroundColor: "#00b894",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "1.1rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

export default Login;
