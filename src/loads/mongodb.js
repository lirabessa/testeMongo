const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://Lirabessa11:abcd0102@meubanquinho.qppkdbq.mongodb.net/?retryWrites=true&w=majority');
}

module.exports = startDB;