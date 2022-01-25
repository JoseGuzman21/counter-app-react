

const personajes = ['Goku','Vegeta','Trunks'];
export const [ , , p3 ] = personajes;

export const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const usState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

export const [ nombre, setNombre ] = usState( 'Goku' );

setNombre();





