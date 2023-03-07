const mongoose = require ('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Vendedor = new mongoose.Schema({
    idProd: ObjectId,
    nome: String,
    email: String,
    cpf: String,
    produtos: String
}, 
);
 
const Vendedores = mongoose.model ('vendedores' , Vendedor)

module.exports = Vendedores