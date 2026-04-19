/*Enunciado
Dado el objeto producto , extraé sus propiedades en variables individuales usando
destructuring y mostrá un mensaje con el formato:

        Notebook cuesta $850000 (categoría: Tecnología)
*/

const producto ={
    nombre: 'Notebook',
    precio: 850000,
    categoria: 'Tecnología'
};

const{nombre,precio,categoria}=producto;
console.log(`${nombre} cuesta $${precio} (categoaria:${categoria})`)