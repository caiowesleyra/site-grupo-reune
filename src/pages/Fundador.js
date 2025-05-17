import React from "react";

function AreaDoFundador() {
  return (
    <div style={{ backgroundColor: "#fdfcfb", padding: "60px 20px" }}>
      {/* SESSÃO 1 - HERO DESTAQUE */}
      <section
        style={{
          backgroundImage: "url('/assets/fundador-banner-principal.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: "12px",
          marginBottom: "80px",
          padding: "0 5%"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "40px",
            borderRadius: "12px",
            maxWidth: "600px"
          }}
        >
          <h2 style={{ color: "#f1c40f", fontSize: "1.2rem", marginBottom: "10px" }}>
            FUNDADOR
          </h2>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "800", lineHeight: "1.3" }}>
            Seja Fundador de<br />Um Movimento<br />que Transforma Vidas
          </h1>
          <p style={{ fontSize: "1.1rem", margin: "20px 0", color: "#eee" }}>
            No pré-lançamento, cada contribuição<br />
            com 10 cotas ou mais gera o dobro<br />
            e o reconhecimento eterno.
          </p>
          <a
            href="/cadastro"
            style={{
              display: "inline-block",
              backgroundColor: "#f1c40f",
              color: "#222",
              padding: "14px 28px",
              borderRadius: "30px",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
            }}
          >
            Quero me tornar um Fundador
          </a>
        </div>
      </section>

      {/* SESSÃO 2 - BENEFÍCIOS EM CARDS COM ANIMAÇÃO */}
<section style={{ textAlign: "center", marginBottom: "80px" }}>
  <h2 style={{ fontSize: "2.4rem", color: "#2d3436", marginBottom: "40px" }}>
    Benefícios de ser um Fundador
  </h2>

  <style>
    {`
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .card-animado {
        animation: fadeInUp 0.8s ease forwards;
        opacity: 0;
      }

      .card-animado:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
      }
    `}
  </style>

  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
    {[
      "Recompensas dobradas",
      "Acesso antecipado",
      "Ranking exclusivo",
      "Reconhecimento vitalício"
    ].map((item, i) => (
      <div
        key={i}
        className="card-animado"
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "260px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          animationDelay: `${i * 0.2}s`
        }}
      >
        <img
          src={`/assets/fundador-b${i + 1}.png`}
          alt={item}
          style={{ width: "100px", marginBottom: "20px" }}
        />
        <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>{item}</h3>
      </div>
    ))}
  </div>
</section>

      {/* SESSÃO 3 - CHAMADA FINAL */}
      <section
        style={{
          backgroundColor: "#f1f2f6",
          padding: "60px 20px",
          textAlign: "center",
          borderRadius: "12px"
        }}
      >
        <h2 style={{ fontSize: "2.2rem", color: "#00b894", marginBottom: "20px" }}>
          Venha construir esse legado com a gente
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#555",
            maxWidth: "750px",
            margin: "0 auto 30px"
          }}
        >
          Essa é uma oportunidade única de estar entre os primeiros a acreditar nesse movimento que
          une educação, impacto social e prosperidade coletiva.
        </p>
        <a
          href="/cadastro"
          style={{
            backgroundColor: "#00b894",
            color: "#fff",
            padding: "16px 32px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1.1rem"
          }}
        >
          Fazer parte agora
        </a>
      </section>
    </div>
  );
}

export default AreaDoFundador;
