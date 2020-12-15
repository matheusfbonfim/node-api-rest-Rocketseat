// Importando o express
const express = require('express');
// Rotas 
const routes = express.Router();

// Importa a função da requisição 
const ProductController = require('./controllers/ProductController');

// PRIMEIRA ROTA
// Mostra o que será mostrado com uma determinada rota 
// Req -> Requisição (Parâmetros, corpo da req, cabeçalho da req, usuario,autenticação)
// Res -> Resposta que será dada para requisição
routes.get('/products', ProductController.index);

// Method post -> Cria algo no servidor
routes.post('/products',ProductController.store);

// Método para mostrar um produto especifico
routes.get("/products/:id",ProductController.show);

// Atualizar um produto especifico
routes.put('/products/:id',ProductController.update);

// Deletar um produto especifico
routes.delete('/products/:id',ProductController.delete);

// Exporta a rota 
module.exports = routes;