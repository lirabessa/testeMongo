const {Router} = require ('express');
const ProdutoControle = require ('./Controllers/produtos/createProduto')


const routes = Router();

routes.get('/', (req,res) => {
    return res.status(200).json({message: "Servidor on"})
});

routes.post('/produtos' , ProdutoControle.create )

module.exports = routes;