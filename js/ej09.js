/*Enunciado
Dado un array de personas (objetos con nombre y edad ), creá un nuevo array que
contenga solo las personas mayores de edad.
Salida esperada
[
{ nombre: ’Ana’, edad: 22 },
{ nombre: ’Pedro’, edad: 35 }
]*/

const personas = [
    {nombre: 'Sebastian', edad: 36},
    {nombre: 'Aluminé', edad: 12},
    {nombre: 'Aldana', edad: 30},
    {nombre:'Sofia', edad: 23},
    {nombre:'Martín', edad: 17}
]
console.log(personas)

const mayores = personas.filter (e=> e.edad >= 18);
console.log(mayores)