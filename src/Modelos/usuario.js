const mongoose = require ('mongoose')

const Usuario = mongoose.model('Usuario', {
    nome:String,
    cpf: String
})

module.exports = Usuario