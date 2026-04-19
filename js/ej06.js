/*Enunciado
Dada una variable edad , mostrá en consola si la persona es mayor o menor de
edad.
Ejemplos de salida esperada
Si edad = 20 : Sos mayor de edad.
Si edad = 15 : Sos menor de edad.*/


let edad = prompt('Ingrese su edad: ');
if (edad >= 18){
    console.log('Sos mayor de edad');
}else{
    console.log('Sos menor de edad');
}