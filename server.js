// Importando o express
const express = require('express');
// Importando o mongoose
const mongoose = require('mongoose');
// Importar todos os esquemas do banco atraves de um require
const requireDir = require('require-dir');
// Importando o cors para acesso publico
const cors = require('cors');


// Instancia/Executa o express - Inicia o app
const app = express();

// Permiti com que envie dados para app no formato de JSON
app.use(express.json());

// Permitir o uso do cors
app.use(cors());

// Iniciando o banco de dados DB
mongoose.connect("mongodb://localhost:27017/nodeapi", { 
  useNewUrlParser:true,
  useUnifiedTopology: true});

// Registrar o model na aplicação (DB)
requireDir('./src/models');  

// ROTAS

// Primeira rota - Importado do routes
// Use aceita todas as requisições (GET,POST...)
app.use('/api', require('./src/routes'));

// Porta do navegador 
app.listen(3001);