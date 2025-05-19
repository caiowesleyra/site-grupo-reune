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

    setErro(""); // limpa erro anterior
    setCarregando(true);

    try {
      const resposta = await axios.post("https://grupo-reune-backend.onrender.com/api/login", {
        email,
        senha,
      });

      console.log("✅ Resposta do backend:", resposta.data);

      // Se chegou aqui, login deu certo
      setCarregando(false);

      // Salva os dados do usuário no localStorage
      localStorage.setItem("usuarioLogado", JSON.stringify(resposta.data.usuario));

      // Redireciona para o painel
      navigate("https://painel.gruporeune.com");

    } catch (erro) {
      console.error("❌ Erro no login:", erro);
      setCarregando(false);
      setErro("Email ou senha inválidos.");
    }
  };

  return (
    <div className="login-container">
      <div className={`login-card ${showCard ? "show" : ""}`}>
        <img src="/logo.png" alt="Logo" className="logo" />
        <h2>Bem-vindo de volta</h2>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {erro && <p className="erro">{erro}</p>}
        <button onClick={handleLogin} disabled={carregando}>
          {carregando ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </div>
  );
}

export default Login;
