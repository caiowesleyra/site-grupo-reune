import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const resposta = await axios.post("https://grupo-reune-backend.onrender.com/api/login", {
        email,
        senha,
      });

      localStorage.setItem("usuario", JSON.stringify(resposta.data.usuario));
      navigate("/dashboard");
    } catch (err) {
      setErro("Email ou senha incorretos.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #3A0CA3, #7209B7, #F72585)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {showCard && (
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.25)",
            width: "100%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "20px", color: "#333" }}>Entrar no Sistema</h2>
          {erro && <p style={{ color: "red", marginBottom: "10px" }}>{erro}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
            <button
              type="submit"
              disabled={carregando}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#6a1b9a",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {carregando ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
