const Produtos = require ('../../Modelos/produto')

class ProdutoControle {
    async create (req, res){

        try {
        const criarProduto = await Produtos.create(req.body);
            return res.status(201).json(criarProduto);
        } catch (error) {
            res.status(500).json({message: "erro"})
        }
    }

    async find (req, res){

        try {
        const readProduto = await Produtos.find();
            return res.status(302).json({readProduto})
        } catch (error) {
            res.status(404).json({message: "Não encontrado"})
        }
        
    }
}
module.exports = new ProdutoControle();