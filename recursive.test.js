/* 
Copyright (C) <2022>  <Jakepys> <j4kyjak3@protonmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
