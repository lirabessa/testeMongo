const express = require ('express')
const routes = require ('./routes');
const { default: teste2 } = require('./teste');
const app = express()

app.use(express.json());
app.use(routes)

module.exports =app;