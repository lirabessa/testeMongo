const Vendedor = require ("../../Modelos/vendedor")

class VendedorControle{
    async create (req, res){
        const criarVendedor = await Vendedor.create(req.body);
        return res.status(200).json(criarVendedor)
    }
}
module.exports = new VendedorControle()

