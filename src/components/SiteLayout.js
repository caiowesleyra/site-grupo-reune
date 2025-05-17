// src/components/SiteLayout.js
import React from "react";
import Navbar from "./Navbar";

function SiteLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "30px", minHeight: "80vh" }}>
        {children}
      </main>
      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#f0f0f0" }}>
        © {new Date().getFullYear()} GRUPO REUNE. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default SiteLayout;
