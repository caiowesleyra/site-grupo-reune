import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [usuarioLogado, setUsuarioLogado] = useState(null);

  // ✅ Atualiza o estado sempre que a rota mudar (ex: após login)
  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('usuarioLogado'); // corrigido
    setUsuarioLogado(usuarioSalvo ? JSON.parse(usuarioSalvo) : null);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado'); // corrigido
    setUsuarioLogado(null);
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-logo">GRUPO REUNE</div>
      <nav className="header-nav">
        <Link to="/" className="nav-btn">Início</Link>
        <Link to="/sobre" className="nav-btn">Sobre</Link>
        <Link to="/projetos-sociais" className="nav-btn">Projetos Sociais</Link>
        <Link to="/fundador" className="nav-btn">Área do Fundador</Link>
        <Link to="/contato" className="nav-btn">Contato</Link>

        {!usuarioLogado ? (
          <>
            <Link to="/login" className="login-btn">Entrar</Link>
            <Link to="/cadastro" className="cadastro-btn">Cadastre-se</Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: '10px', color: '#fff' }}>
              Olá, {usuarioLogado.nome}
            </span>
            <button
              onClick={handleLogout}
              className="logout-btn"
              style={{
                background: 'red',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Sair
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
