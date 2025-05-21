import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Vamos criar esse CSS separado

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

      localStorage.setItem("usuario", JSON.stringify(resposta.data.usuario));
      navigate("/dashboard");
    } catch (err) {
      setErro("Email ou senha incorretos.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <h2>Entrar no Sistema</h2>
        {erro && <p className="erro">{erro}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
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
          <button type="submit" disabled={carregando}>
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
