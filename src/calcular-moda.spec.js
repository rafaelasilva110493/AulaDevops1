const calcularModa = require("./calcular-moda");

describe('calcularModa', () => {
  test('moda de [1, 2, 2, 3] deve ser 2', () => {
    expect(calcularModa([1, 2, 2, 3])).toBe(2);
  });

  test('moda de [1, 1, 2, 2] deve ser "Nao existe"', () => {
    expect(calcularModa([1, 1, 2, 2])).toBe("Nao existe");
  });

  test('moda de [5] deve ser 5', () => {
    expect(calcularModa([5])).toBe(5);
  });

  test('moda de [] deve ser "Nao existe"', () => {
    expect(calcularModa([])).toBe("Nao existe");
  });

  test('moda de [4, 4, 4, 2, 2] deve ser 4', () => {
    expect(calcularModa([4, 4, 4, 2, 2])).toBe(4);
  });

  test('moda de [3, 3, 3, 3, 3] deve ser 3', () => {
    expect(calcularModa([3, 3, 3, 3, 3])).toBe(3);
  });

  test('moda de [1, 2, 3, 4] deve ser "Nao existe"', () => {
    expect(calcularModa([1, 2, 3, 4])).toBe("Nao existe");
  });

  test('moda de [7, 7, 8, 8, 9] deve ser "Nao existe"', () => {
    expect(calcularModa([7, 7, 8, 8, 9])).toBe("Nao existe");
  });

  test('moda de [10, 10, 10, 20, 30] deve ser 10', () => {
    expect(calcularModa([10, 10, 10, 20, 30])).toBe(10);
  });

  test('moda de [1, 2, 2, 3, 3, 3, 2] deve ser 2', () => {
    expect(calcularModa([1, 2, 2, 3, 3, 3, 2])).toBe("Nao existe");
  });
});
