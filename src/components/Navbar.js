import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuarioLogado");
    setUsuarioLogado(usuarioSalvo ? JSON.parse(usuarioSalvo) : null);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    setUsuarioLogado(null);
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      {/* LOGO MAIOR, COM BACKGROUND INVISÍVEL */}
      <div style={styles.logo}>
        <Link to="/">
          <img
            src="/assets/logo-reune.png"
            alt="Logo GRUPO REUNE"
            style={{ height: "180px", objectFit: "contain" }}
          />
        </Link>
      </div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Início</Link>
        <Link to="/sobre" style={styles.link}>Sobre</Link>
        <Link to="/projetos-sociais" style={styles.link}>Projetos Sociais</Link>
        <Link to="/fundador" style={styles.link}>Área do Fundador</Link>
        <Link to="/contato" style={styles.link}>Contato</Link>

        {!usuarioLogado ? (
          <>
            <Link to="/login" style={styles.link}>Entrar</Link>
            <Link
              to="/cadastro"
              style={{
                ...styles.link,
                background: "#00b894",
                padding: "6px 10px",
                borderRadius: "6px",
                color: "#fff",
              }}
            >
              Cadastre-se
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sair
          </button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "absolute", // ← fica sobre a imagem!
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent", // ← remove fundo preto
    backdropFilter: "none"
  },
  logo: {
    display: "flex",
    alignItems: "center"
  },
  links: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500"
  }
};

export default Navbar;
