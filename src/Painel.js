import React from "react";

function Painel() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Você está logado no Painel do GRUPO REUNE</h2>
      <p>Aqui você poderá acessar seu backoffice com os menus:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>1. Dashboard</li>
        <li>2. Cadastro</li>
        <li>3. Profile</li>
        <li>4. Une Social (Free/Partner Donation)</li>
        <li>5. Sala Reuneflix</li>
        <li>6. Colaborador</li>
        <li>7. Comunidade</li>
        <li>8. Extrato</li>
        <li>9. Saques</li>
        <li>10. Materiais</li>
      </ul>
    </div>
  );
}

export default Painel;
