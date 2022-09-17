/*
  ==============================================================================================================
  Imprimir los numeros de forma invertida, por ejemplo si el numero es 5,
  debera imprimir 5,4,3,2,1. Si el numero llega a 1, imprimir terminaste.
  Si el numero ingresado es 0. Imprimir "Para que perder el tiempo".
  Dato: los numeros imprimidos deben guardarse en un array de forma FIFO <Primero en entrar, primero en salir>
  y LIFO “último en entrar, primero en salir” "Demostrarlo".
  Debe usarse recursion, no estan permitidos bucles for, while, do while etc...
  ==============================================================================================================
*/

let arrNumero = [];
let contador = 0;

function rev(n) {
  if (n > 0) {
    arrNumero.push(n);
    contador += 1;
    rev(n - 1);
  }

  return "Termine";
}

function compararContador(contador) {
  if (contador === arrNumero.length) {
    return true;
  }
  return false;
}

rev(10);
console.log(compararContador(contador));
console.log(arrNumero.length);
console.log(contador);

module.exports = {
  rev,
  compararContador,
  arrNumero,
  contador,
};
