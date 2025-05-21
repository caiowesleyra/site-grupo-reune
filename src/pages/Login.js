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
      const resposta = await axios.post(
        "https://grupo-reune-backend-production-14b5.up.railway.app/api/login",
        { email, senha }
      );

      console.log("✅ Resposta do backend:", resposta.data);

      setCarregando(false);

      // ✅ Chave corrigida para 'usuario' (antes estava 'usuarioLogado')
      localStorage.setItem("usuario", JSON.stringify(resposta.data.usuario));

      // Redireciona para o painel do backoffice
      window.location.href = `https://painel.gruporeune.com?usuario=${encodeURIComponent(JSON.stringify(resposta.data.usuario))}`;
    } catch (erro) {
      console.error("❌ Erro no login:", erro);
      setCarregando(false);
      setErro("Email ou senha inválidos.");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#000",
      color: "#fff",
      fontFamily: "Poppins, sans-serif",
    }}>
      <div style={{
        background: "#111",
        borderRadius: "12px",
        padding: "40px",
        width: "100%",
        maxWidth: "400px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        transform: showCard ? "translateY(0)" : "translateY(50px)",
        opacity: showCard ? 1 : 0,
        transition: "all 0.5s ease",
      }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img src="/logo.png" alt="REUNE" style={{ width: "80px", marginBottom: "10px" }} />
          <h2>Bem-vindo de volta</h2>
        </div>

        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
          }}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
          }}
        />
        {erro && <p style={{ color: "#ff4d4f", marginBottom: "10px" }}>{erro}</p>}
        <button
          onClick={handleLogin}
          disabled={carregando}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#00C9A7",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          {carregando ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </div>
  );
}

export default Login;
