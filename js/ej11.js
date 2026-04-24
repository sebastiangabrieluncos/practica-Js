/*Enunciado
Dado un array de alumnos con su nombre y nota , hacé lo siguiente:
1. Filtrá los alumnos con nota mayor o igual a 6 (aprobados).
2. Mostrá en consola un array con los nombres de los aprobados.
3. Mostrá cuántos alumnos en total están desaprobados.

Salida esperada
Aprobados: [’Ana’, ’Pedro’, ’Sofía’]
Desaprobados: 2*/

const alumnos = [
    {nombre:'Ana', nota: 5},
    {nombre: 'Pedro', nota: 7},
    {nombre:'Sofia', nota:4},
    {nombre: 'Facuando', nota:8},
    {nombre: 'Sebastian', nota:2},
    {nombre: 'Lucia',nota:6},
    { nombre : " Ana", nota : 8 },
    { nombre : " Luis ", nota : 4 },
    { nombre : " Pedro ", nota : 6 } ,
    { nombre : " Marta ", nota : 3 } ,
    { nombre : " Sofía", nota : 9 }
];
console.table(alumnos);

const aprobados = alumnos.filter(n=> n.nota>=6) .map (a=> a.nombre);
console.log(`Los alumnos aprobados son: ${aprobados}`);

const desaprobados =alumnos.filter (d=> d.nota<6).length;
console.log(`La cantidad de alumnos desaprobados es: ${desaprobados}`);

