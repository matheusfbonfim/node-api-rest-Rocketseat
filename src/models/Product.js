const mongoose = require('mongoose');

// Modulo do mongoose para paginação
const mongoosePaginate = require('mongoose-paginate');

// Esquema do banco de dados - Produto
const ProductSchema =  new mongoose.Schema({
  // Titulo e obrigatório
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  url:{
    type: String,
    required: true
  },
  // Registro automático da data atual
  createdAt:{
    type: Date,
    default: Date.now
  }
});

// Adiciona o plugin de mongoose Paginate
ProductSchema.plugin(mongoosePaginate);

// Código para registrar um model no DB (Pode-se registar a quantidade que for requerida)
mongoose.model('Product', ProductSchema);