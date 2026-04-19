/*Enunciado
Dado un array de números, creá un nuevo array donde cada número esté multiplicado por 2, usando el método map .
Salida esperada
[2, 4, 6, 8, 10]*/

const numeros = [1,2,3,4,5];
console.log(numeros);
const dobles = numeros.map(num => num *2);
console.log(dobles);
