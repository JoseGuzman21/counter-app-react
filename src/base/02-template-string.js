const nombre   = 'Jose';
const apellido = 'Guzman';

// const nombreCompleto = nombre + ' ' + apellido;
export const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );

export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );