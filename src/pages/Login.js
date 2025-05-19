import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowCard(true), 100);
  }, []);

  const handleLogin = async () => {
    console.log("🔍 handleLogin foi chamado");

    setErro("");
    setCarregando(true);

    try {
      const resposta = await axios.post("https://grupo-reune-backend.onrender.com/api/login", {
        email,
        senha,
      });

      console.log("✅ Resposta do backend:", resposta.data);

      const { success, usuario } = resposta.data;

      if (success && usuario) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href = "https://painel.gruporeune.com";
      } else {
        setErro(resposta.data.erro || "Email ou senha inválidos.");
      }
    } catch (error) {
      console.error("❌ Erro no login:", error);
      setErro("Erro ao tentar fazer login. Verifique os dados.");
    } finally {
      setCarregando(false);
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

        <form>
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
            type="button"
            onClick={handleLogin}
            disabled={carregando}
            style={{
              ...botaoEstilizado,
              backgroundColor: carregando ? "#636e72" : "#00b894",
              cursor: carregando ? "not-allowed" : "pointer",
            }}
          >
            {carregando ? "Entrando..." : "Entrar"}
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
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "1.1rem",
  fontWeight: "600",
  transition: "background-color 0.3s",
};

export default Login;
