const request = require('supertest');
const app = require('./routes'); // assumindo que sua aplicação Express está definida em um arquivo chamado app.js

describe('Testando as rotas', () => {
  // teste para a rota GET /
  it('Deve retornar uma mensagem de "Servidor on"', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Servidor on');
  });

  // teste para a rota POST /produtos
  it('Deve criar um novo produto', async () => {
    const novoProduto = {
      nomeProd: 'Produto de Teste',
      descricao: 'Descrição do Produto de Teste',
      preco: 9.99,
      nomeVendedor: 'Vendedor de Teste'
    };
    const res = await request(app).post('/produtos').send(novoProduto);
    expect(res.status).toBe(201);
    expect(res.body.nomeProd).toBe('Produto de Teste');
  },50000);

  // teste para a rota GET /produtos
  it('Deve retornar uma lista de produtos', async () => {
    const res = await request(app).get('/produtos');
    expect(res.status).toBe(302);
    expect(Array.isArray(res.body.readProduto)).toBe(true);
  },50000);
});
