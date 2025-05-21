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
    setErro("");
    setCarregando(true);

    try {
      const resposta = await axios.post(
        "https://grupo-reune-backend.onrender.com/api/login",
        {
        email,
        senha,
      });

      if (resposta.data && resposta.data.usuario) {
        localStorage.setItem("usuario", JSON.stringify(resposta.data.usuario)); // <-- SALVA NO LOCALSTORAGE
        navigate("https://painel.gruporeune.com"); // REDIRECIONA PARA O PAINEL
      } else {
        setErro("Login inválido. Tente novamente.");
      }
    } catch (err) {
      console.error("❌ Erro ao logar:", err);
      setErro("Email ou senha incorretos.");
    }

    setCarregando(false);
  };

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h2>Login</h2>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button onClick={handleLogin} disabled={carregando}>
        {carregando ? "Carregando..." : "Entrar"}
      </button>
    </div>
  );
}

export default Login;
