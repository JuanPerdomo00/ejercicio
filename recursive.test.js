const { rev, arrNumero, compararContador, contador } = require("./recursive");

it("debe retornar Termine", () => {
  expect(rev()).toBe("Termine");
});

it("La variable arrNumero debe contener el array de 10 invertido", () => {
  expect(arrNumero).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

it("Debe retornar true si el contador es igual a la longitud de array", () => {
  expect(compararContador(contador)).toBeTruthy();
});
