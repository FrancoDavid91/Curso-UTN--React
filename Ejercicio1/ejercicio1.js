//====================================================================//
/*
    EJERCICIO 1

Tengo desarrollada la siguiente función en javascript
function suma (a,b,callback){
let c = a +b;
callback( );
}
 1) ¿Que es el tercer parámetro recibido?
 2) ¿En que casos es obligatorio desarrollar este tipo de funciones?
 3) Realizar un llamado a la función de ejemplo.*/

 /*
 1) El tercer parámetro recibido en la función "suma" es la función "callback". En este contexto, una función de "callback" es una función que se pasa como argumento a otra función y se ejecuta después de que se complete cierta tarea.

 2) Las funciones de "callback" son necesarias en programación para gestionar operaciones asíncronas, y en sí buscar una personalización de comportamiento. Se utilizan en situaciones en las que es importante controlar cuándo y cómo se ejecutan ciertas tareas.
 */

 // 3) Aquí mostramos una llamada a la función "callback" como parámetro de la función "suma". Se elige una acción simple y arbitraria para la función "callback," únicamente con fines demostrativos. El script de ejercicio1.js se llama en un archivo index.html de ejemplo, para mostrarse en la consola del browser (herramienta de inspección).

 function suma (a,b,callback){
    let c = a +b;
    callback(c);
}

function callback(c){
    console.log("La suma es: " + c);
}

suma(2,3,callback)