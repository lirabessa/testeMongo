const Produtos = require ('../../Componetes/produto')

const createProduto = await Produtos.create(req.body);
return res.status(200).json(createProduto);