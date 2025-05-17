import React, { useEffect, useState } from "react";

function Home() {
  const [mostrarVideo, setMostrarVideo] = useState(false);

  const abrirVideo = () => setMostrarVideo(true);
  const fecharVideo = () => setMostrarVideo(false);

  useEffect(() => {
    const poppins = document.createElement("link");
    poppins.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap";
    poppins.rel = "stylesheet";

    const oswald = document.createElement("link");
    oswald.href = "https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700;800&display=swap";
    oswald.rel = "stylesheet";

    document.head.appendChild(poppins);
    document.head.appendChild(oswald);
  }, []);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* HERO */}
      <section
        style={{
          backgroundImage: "url('/assets/banner-grupo-reune.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
  className="fade-in-top"
  style={{
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "1000px",
    textAlign: "center",
    margin: "0 20px"
  }}
>
          <h1 style={{
            fontSize: "2.6rem",
            fontWeight: "700",
            color: "#1e1e1e",
            marginBottom: "20px",
            lineHeight: "1.4"
          }}>
            A maior comunidade de desenvolvimento pessoal e negócios do Brasil,
            unindo conhecimento e solidariedade para transformar vidas
          </h1>
          <button
            onClick={abrirVideo}
            className="hover-scale"
            style={{
              padding: "14px 28px",
              fontSize: "1rem",
              backgroundColor: "#00b894",
              color: "#fff",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer"
          }}
          >
           Assista o vídeo do projeto
          </button>
        </div>
      </section>

      {/* MODAL DO VÍDEO */}
      {mostrarVideo && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999
        }}>
          <div style={{ position: "relative", width: "90%", maxWidth: "800px" }}>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/1q1cRhf7kwA"
              title="Vídeo do Projeto GRUPO REUNE"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={fecharVideo}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "#ff4757",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* SOBRE O PROJETO */}
      <section id="projeto" style={{ padding: "60px 20px", backgroundColor: "#ffffff" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px"
        }}>
          <div style={{
            maxWidth: "600px",
            textAlign: "left",
            fontSize: "1.25rem",
            lineHeight: "2",
            flex: "1",
            paddingLeft: "80px"
          }}>
            <h2 style={{
              fontSize: "3.6rem",
              fontFamily: "'Oswald', sans-serif",
              fontWeight: "800",
              color: "#00b894",
              marginBottom: "20px",
              textTransform: "uppercase",
              lineHeight: "1.1"
            }}>
              O que é o GRUPO REUNE?
            </h2>
            <p>Uma plataforma 100% gratuita com conteúdos em vídeo sobre vários mercados digitais, como:</p>
            <p style={{ marginTop: "10px" }}>
              🔶 Marketing de rede  🔶 Tráfego pago<br />
              🔶 Afiliados      🔶 Dropshipping<br />
              🔶 Trading      🔶 Criptomoedas<br />
              🔶 E muito mais.
            </p>
            <p style={{ marginTop: "20px" }}>
              Nosso propósito é formar uma geração inteira de novos empreendedores digitais. Tudo através da nossa plataforma REUNEFLIX.
            </p>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: "1"
          }}>
            <img
              src="/assets/13fb9e283f4fcbb617a14e735979628e.png"
              alt="Logo Reuneflix"
              style={{ width: "200px", marginBottom: "20px" }}
            />
            <img
              src="/assets/reuneflix-.png"
              alt="Reuneflix"
              style={{
                width: "666px",
                height: "auto",
                marginBottom: "20px",
                boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
                borderRadius: "12px",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            />
            <a
              href="https://gruporeune.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#00b894",
                color: "#fff",
                padding: "12px 24px",
                fontSize: "1rem",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: "600",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
              }}
            >
              Assista agora mesmo
            </a>
          </div>
        </div>
      </section>

      {/* UNE SOCIAL */}
<section style={{ padding: "60px 20px", backgroundColor: "#f9f9f9", textAlign: "center", position: "relative", overflow: "hidden" }}>
  {/* LOGO CENTRAL */}
  <img
    src="/assets/logo-une-social.png"
    alt="Logo UNE Social"
    style={{
      width: "120px",
      marginBottom: "20px",
      boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
      borderRadius: "50%",
      backgroundColor: "#fff",
      padding: "12px"
    }}
  />

  <h2 style={{ fontSize: "2.3rem", fontWeight: "600", color: "#e67e22", marginTop: "20px" }}>
    UNE SOCIAL: Doar é Transformar
  </h2>
  <p style={{ fontSize: "1.05rem", maxWidth: "850px", margin: "20px auto" }}>
    Nosso projeto social que apoia causas humanitárias e animais. Você pode contribuir de duas formas:
  </p>

  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap",
    maxWidth: "1200px", margin: "40px auto", gap: "30px"
  }}>
    {/* ESQUERDA: imagem homem com dinheiro */}
    <div style={{
      flex: "1",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <img
        src="/assets/Design-sem-nome-(4).png"
        alt="Homem feliz com lucros"
        style={{ width: "100%", maxWidth: "380px", borderRadius: "12px" }}
      />
    </div>

    {/* CENTRO: textos */}
<div style={{
  flex: "2",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "30px",
  minWidth: "300px"
}}>
  <div style={{
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "400px",
    flex: "1",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  }}>
    <h3 style={{ color: "#00b894", fontSize: "1.4rem" }}>Free Donation</h3>
    <p>
      Doações livres, de qualquer valor. 100% destinado às instituições. Não há recompensas financeiras, apenas solidariedade.
    </p>
  </div>
  <div style={{
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "400px",
    flex: "1",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  }}>
    <h3 style={{ color: "#e67e22", fontSize: "1.4rem" }}>Partner Donation</h3>
    <p>
      Cada cota de R$100 ajuda a alavancar o projeto. 20% vai para doação, 80% para rentabilização. Gera premiação proporcional e bônus por indicação.
    </p>
  </div>
</div>

    {/* DIREITA: imagem família e pets */}
    <div style={{
      flex: "1",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <img
        src="/assets/Design-sem-nome-(3).png"
        alt="Família com cachorro e gato"
        style={{ width: "100%", maxWidth: "380px", borderRadius: "12px" }}
      />
    </div>
  </div>
</section>

      {/* CALL TO ACTION */}
      <section style={{
        padding: "80px 20px",
        backgroundImage: "url('/assets/free-donation-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        color: "white"
      }}>
        <div style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "60px 20px",
          borderRadius: "12px",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          <h2 style={{ fontSize: "2.3rem", marginBottom: "20px" }}>Faça parte do movimento</h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
            Venha plantar sua semente em campo fértil. Ajude uma criança a sair das ruas!<br />
            Ajude um animal abandonado a encontrar um dono!<br />
            Doe de coração!
          </p>
          <p style={{ fontSize: "1.2rem", fontWeight: "600", background: "#fff", color: "#222", display: "inline-block", padding: "12px 24px", borderRadius: "8px" }}>
            PIX: gruporeuneoficial@gmail.com
          </p>
        </div>
      </section>

      {/* GALERIA DE IMAGENS COM CONTROLE */}
<section
  style={{
    background: "linear-gradient(to right, #fff9e6, #fff5cc)",
    padding: "60px 0",
    position: "relative",
    overflow: "hidden"
  }}
>
  <h2 style={{
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#333"
  }}>
    A quem nós temos alcançado?
  </h2>

  <div
    id="carrossel"
    style={{
      display: "flex",
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      scrollBehavior: "smooth",
      padding: "0 40px",
      gap: "20px"
    }}
  >
    {[
      "/assets/img1.jpg",
      "/assets/img2.jpg",
      "/assets/img3.jpg",
      "/assets/img4.jpg",
      "/assets/img5.jpg",
      "/assets/img6.jpg"
    ].map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`ação social ${index + 1}`}
        style={{
          height: "300px",
          borderRadius: "12px",
          flex: "0 0 auto",
          scrollSnapAlign: "center",
          objectFit: "cover"
        }}
      />
    ))}
  </div>

  {/* BOTÕES DE NAVEGAÇÃO */}
  <button
    onClick={() => {
      document.getElementById("carrossel").scrollBy({ left: -300, behavior: "smooth" });
    }}
    style={{
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      background: "#ffce00",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize: "1.5rem",
      cursor: "pointer",
      boxShadow: "0 0 10px rgba(0,0,0,0.2)"
    }}
  >
    ‹
  </button>

  <button
    onClick={() => {
      document.getElementById("carrossel").scrollBy({ left: 300, behavior: "smooth" });
    }}
    style={{
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      background: "#ffce00",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize: "1.5rem",
      cursor: "pointer",
      boxShadow: "0 0 10px rgba(0,0,0,0.2)"
    }}
  >
    ›
  </button>
</section>

{/* FUNDADORES */}
<section style={{
  padding: "80px 20px",
  backgroundImage: "url('/assets/fundadores-banner.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  textAlign: "center",
  color: "white",
  position: "relative"
}}>
  <div style={{
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "60px 20px",
    borderRadius: "12px",
    maxWidth: "1000px",
    margin: "0 auto"
  }}>
    <h2 style={{ fontSize: "2.6rem", color: "#f1c40f", fontWeight: "700" }}>
      Programa de Fundadores
    </h2>
    <p style={{
      fontSize: "1.2rem",
      marginTop: "30px",
      lineHeight: "1.8"
    }}>
      Durante o pré-lançamento, quem contribuir com 10 cotas<br />
      ou mais, receberá o dobro delas como bônus.<br />
      Tornando-se um dos fundadores oficiais do projeto.
    </p>

    {/* Botão flutuante */}
    <a
      href="/cadastro"
      style={{
        position: "relative",
        top: "40px",
        display: "inline-block",
        backgroundColor: "#f1c40f",
        color: "#000",
        padding: "14px 28px",
        fontSize: "1rem",
        fontWeight: "600",
        borderRadius: "30px",
        textDecoration: "none",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease"
      }}
      onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
    >
      Quero me cadastrar agora
    </a>
  </div>
</section>

    </div>
  );
}

export default Home;