import React from "react";

function ProjetosSociais() {
  const projetos = [
    {
      titulo: "Distribuição de Alimentos",
      descricao: "Realizamos ações mensais com entrega de marmitas e cestas básicas.",
      imagem: "/assets/distribuicao-alimentos.jpg",
    },
    {
      titulo: "Doações via Pix",
      descricao: "Recebemos doações voluntárias através do projeto Free Donation.",
      imagem: "/assets/doacoes-pix.jpg",
    },
    {
      titulo: "Premiações Solidárias",
      descricao: "Recompensamos participantes com prêmios, fortalecendo nossa corrente do bem.",
      imagem: "/assets/premiacoes-solidarias.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#eeeeee", padding: "60px 20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.8rem", marginBottom: "40px", color: "#00b894" }}>
        Nossos Projetos Sociais
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
        {projetos.map((projeto, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              maxWidth: "350px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ color: "#2d3436", fontSize: "1.3rem", marginBottom: "10px" }}>{projeto.titulo}</h3>
              <p style={{ color: "#636e72", fontSize: "1rem", lineHeight: "1.5" }}>{projeto.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "80px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#2d3436", marginBottom: "20px" }}>Transforme vidas com a gente</h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto 30px", color: "#555" }}>
          Cada projeto é uma ponte entre quem precisa e quem quer ajudar. Seja um colaborador, doador ou parceiro. Toda
          contribuição faz a diferença.
        </p>
        <a
          href="/cadastro"
          style={{
            backgroundColor: "#f1c40f",
            color: "#222",
            padding: "14px 30px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          Quero ajudar agora
        </a>
      </div>
    </div>
  );
}

export default ProjetosSociais;
