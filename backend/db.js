const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'srv1896.hstgr.io',       // <-- substitua pelo host exato do banco (provavelmente algo assim)
  user: 'u167429742_adminreune', // <-- seu usuário
  password: '270389Caw@',         // <-- sua senha do MySQL
  database: 'u167429742_gruporeune_db' // <-- nome do banco
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados:', err);
  } else {
    console.log('🟢 Banco de dados conectado com sucesso!');
  }
});

module.exports = db;
