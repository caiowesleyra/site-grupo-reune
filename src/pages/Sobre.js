import React, { useEffect } from "react";

function Sobre() {
  useEffect(() => {
    const poppins = document.createElement("link");
    poppins.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap";
    poppins.rel = "stylesheet";
    document.head.appendChild(poppins);
  }, []);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in {
            animation: fadeInUp 1s ease forwards;
            opacity: 0;
          }
        `}
      </style>

      {/* Banner com imagem da equipe */}
      <section style={{
        backgroundImage: "url('/assets/banner-grupo-reune.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px"
      }}>
        <h1 style={{
          fontSize: "3rem",
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "20px 40px",
          borderRadius: "12px"
        }}>
          JUNTOS SOMOS FORTES!
        </h1>
      </section>

      {/* Missão */}
      <section
        className="fade-in"
        style={{ padding: "60px 20px", backgroundColor: "#ffffff", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2.2rem", color: "#00b894", marginBottom: "20px" }}>
          Nossa Missão
        </h2>
        <p style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "1.1rem",
          lineHeight: "1.8"
        }}>
          Transformar vidas por meio da educação digital, empreendedorismo consciente e impacto social real.
          Nosso compromisso é empoderar pessoas com conhecimento acessível e gratuito, construindo uma comunidade unida em propósito.
        </p>
      </section>

      {/* Visão */}
      <section
        className="fade-in"
        style={{ padding: "60px 20px", backgroundColor: "#f9f9f9", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2.2rem", color: "#e67e22", marginBottom: "20px" }}>
          Nossa Visão
        </h2>
        <p style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "1.1rem",
          lineHeight: "1.8"
        }}>
          Ser reconhecido como o maior movimento educacional e solidário do Brasil,
          levando oportunidades reais de mudança para milhares de famílias,
          empreendedores e causas sociais.
        </p>
      </section>
    </div>
  );
}

export default Sobre;
