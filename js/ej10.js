/*Enunciado
Dado un array de productos (con nombre , precio y cantidad ), calculá el total a
pagar sumando precio * cantidad de cada uno. Mostrá cada línea del detalle y el
total final.
Salida esperada
Remera x 2 = $10000
Pantalón x 1 = $15000
Zapatillas x 1 = $30000
TOTAL: $55000
*/

const productos= [
    {nombre: 'Remera', precio: 15000, cantidad:4},
    {nombre: 'Pantalon', precio: 48000, cantidad:2},
    {nombre: 'Zapatilas', precio: 23000, cantidad:5}
]

let total = 0;
productos.forEach(({nombre, precio, cantidad})=>{
    const subtotal = cantidad*precio;
    total += subtotal;
    console.log(`${nombre} X ${cantidad} = $${subtotal}`  )
})
console.log('-----------------------')
console.log(`Total de la compra $${total}`)