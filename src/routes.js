const {Router} = require ('express');
const { create } = require('./Componetes/produto');


const routes = Router();

routes.get('/', (req,res) => {
    return res.status(200).json({message: "Servidor on"})
});

routes.post('/produtos' , create  )
module.exports = routes;