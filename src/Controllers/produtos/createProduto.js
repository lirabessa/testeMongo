const Produtos = require ('../../Componetes/produto')

class ProdutoControle {
    async create (req, res){
        const criarProduto = await Produtos.create(req.body);
        return res.status(200).json(criarProduto);}
}
module.exports = new ProdutoControle();