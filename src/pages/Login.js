import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const resposta = await axios.post("https://grupo-reune-backend.onrender.com/api/login", {
        email,
        senha,
      });

      const usuario = resposta.data.usuario;

      // Redireciona com o usuário na URL para o painel
      navigate(
        `https://painel.gruporeune.com/?usuario=${encodeURIComponent(
          JSON.stringify(usuario)
        )}`
      );
    } catch (err) {
      setErro("Email ou senha incorretos.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f2f2f2", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "20px" }}>Entrar no Sistema</h2>
        {erro && <p style={{ color: "red", marginBottom: "10px" }}>{erro}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputEstilo}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            style={inputEstilo}
          />
          <button
            type="submit"
            disabled={carregando}
            style={botaoEstilo}
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

const inputEstilo = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px"
};

const botaoEstilo = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#6a1b9a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer"
};

export default Login;
