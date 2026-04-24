/*Simulá un sistema de login. Dado un objeto usuario y una contrasenaIngresada ,
mostrá un mensaje diferente según qué condición falle:
Condición Mensaje
Todo correcto Bienvenido, [nombre].
Intentos fallidos ≥ 3 Cuenta bloqueada.
Cuenta no activa Cuenta inactiva.
Contraseña incorrecta Contraseña incorrecta.*/

const usuario ={
    nombre : 'Aldu',
    pass: 'abc123',
    cuenta_activa: true,
    intentos_fallidos: 2
};

console.log(usuario);
console.log('===========');




    const pass_ingresada ='abc123';
    const{nombre,pass,cuenta_activa,intentos_fallidos}=usuario;
    if(intentos_fallidos>=3){
    console.log('La cuenta ha sido bloqueada') ;
    }else if (!cuenta_activa){
    console.log('El usuario tiene una cuenta inactiva');
    }else if(pass_ingresada !== pass){
    console.log ('La contraseña ingresada es incorrecta');
    }else{
    console.log(`Bienvenid@ ${nombre}`);
    }

