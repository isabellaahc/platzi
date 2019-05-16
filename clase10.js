var isabel = {
    nombre: 'isabel',
    apellido: 'anabalon',
    edad: 29,
    cantante: false,
    programadora: true,
    jugadora: true
}

var horacio = {
    nombre: 'Horacio',
    apellido: 'Salas',
    edad: 17
}

const MAYORIA_DE_EDAD = 18

function imprimirProfesiones (persona){
    //template string
    console.log(`${persona.nombre} es:`)
    if (persona.programadora === true) {
        console.log(`${persona.nombre} es Programadora`)
    }
    //es lo mismo que poner === porque compara valor true
    if(persona.jugadora){
        console.log('es jugadora')
    }else{
        console.log('no es jugadora')
    }

    if(persona.cantante === false){
        console.log('no es cantante')
    }
}

/*
//funcion anonima 
var esMayorDeEdad = function(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

/*
es la misma funcion anterior pero con una variable global contstante (se escribe en may. para diferenciar)
definida para la funcion :
function esMayorDeEdad(persona) {
    return persona.edad >= 18 // a este numero se le denomina magic number
}
*/

const esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}

//JS permite abreviar las funciones si esta solo contiene un return, esto significa, que la funcion
// de la parte superior puede es igual a: const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
// otra forma de escribir esta funcion es: const esMayorDeEdad ({ edad }) => edad >= MAYORIA_DE_EDAD
// esta es la misma funcion que la anterior pero con el objeto desestructurado


function imprimirMayorEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('no puede acceder')
    }else{
        console.log('puede acceder')
    }
}

const permiteAcceso = persona => !esMayorDeEdad(persona)

