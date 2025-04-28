const soma = require('../src/soma');

test('soma de 1 + 2 é 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('soma de -1 + -1 é -2', () => {
  expect(soma(-1, -1)).toBe(-2);
});

test('soma de 0 + 0 é 0', () => {
  expect(soma(0, 0)).toBe(0);
});

test('soma de 100 + 200 é 300', () => {
  expect(soma(100, 200)).toBe(300);
});

test('soma de 1.5 + 1.5 é 3', () => {
  expect(soma(1.5, 1.5)).toBe(3);
});
// Teste de comentário para PR
