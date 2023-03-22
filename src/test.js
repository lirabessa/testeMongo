// arquivo: src/numero.test.js

function ehPar(numero) {
  return numero % 2 === 0;
}

describe('A função ehPar', () => {
  it('deve retornar true para números pares', () => {
    expect(ehPar(2)).toBe(true);
    expect(ehPar(4)).toBe(true);
    expect(ehPar(10)).toBe(true);
  });
  it('deve retornar false para números ímpares', () => {
    expect(ehPar(1)).toBe(false);
    expect(ehPar(3)).toBe(false);
    expect(ehPar(11)).toBe(false);
  });
});
