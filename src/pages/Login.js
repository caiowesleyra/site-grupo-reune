import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setCarregando(true);
    setErro("");

    try {
      const resposta = await axios.post(
        "https://grupo-reune-backend.onrender.com/api/login",
        { email, senha }
      );

      const usuario = resposta.data.usuario;
      localStorage.setItem("usuario", JSON.stringify(usuario));

      // Redireciona para o painel com os dados na URL
      navigate(`https://painel.gruporeune.com?usuario=${encodeURIComponent(JSON.stringify(usuario))}`);
    } catch (error) {
      setErro("Email ou senha incorretos.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/img/bg-login.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%", bgcolor: "#111827", color: "white" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom textAlign="center">
            Acesse sua Conta
          </Typography>

          {erro && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {erro}
            </Alert>
          )}

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
          />
          <TextField
            label="Senha"
            type="password"
            fullWidth
            margin="normal"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
          />

          <Box mt={3} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              disabled={carregando}
              fullWidth
            >
              {carregando ? <CircularProgress size={24} color="inherit" /> : "Entrar"}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
