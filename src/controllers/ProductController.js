// Importando o mongoose
const mongoose = require('mongoose');

// Importando o product
const Product = mongoose.model("Product");

module.exports = {
  // Listagem de todos os produtos presentes no DB
  async index(req,res){
    // Parametros vindo do get -> req.query -> Informações presentes no link
    const { page = 1 } = req.query;

    // Busca todos os registros no banco de dados
    //const products = await Product.find();
    // Novo modo de busca com paginação -> Product.paginate
    //Product.paginate({filtros}, {paginaatual,tamanhoPagina})
    const products = await Product.paginate({},{ page , limit:10});
    
    return res.json(products);
  },

  // Mostrar um produto determinado
  async show(req,res){
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  // Adicionar um produto - Req post
  async store(req,res){
    // Armazenando informações vindo da req POST
    // req.body contem todo corpo da requisição 
    const product = await Product.create(req.body);
    return res.json(product);
  },

  // Atualizar um elemento especifico
  async update(req,res){
    // Product ja tem um método que atualiza partir do id
    // O parametro {new:true} faz com que a variavel product receba o valor atualizado
    const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.json(product);
  },

  // Deletar um determinado Produto
  async delete(req,res) {
    // Exclui diretamente o elemento
    await Product.findByIdAndRemove(req.params.id); 
    res.send("DELETE ON"); 
  }

};