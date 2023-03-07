const {Router} = require ('express');
const ProdutoControle = require ('./Controllers/produtos/createProduto')
const VendedorControle = require ('./Controllers/vendedor/createVendedor')

const routes = Router();

routes.get('/', (req,res) => {
    return res.status(200).json({message: "Servidor on"})
});

routes.post('/produtos' , ProdutoControle.create )
routes.post('/vendedor' , VendedorControle.create )

module.exports = routes;