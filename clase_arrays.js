var isabel = {
    nombre: 'Isabel',
    apellido: 'Anabalon',
    altura: 1.56
}

var horacio = {
    nombre: 'Horacio',
    apellido: 'Sans',
    altura: 1.82
}

var jimbo = {
    nombre: 'Jimbo',
    apellido: 'Sens',
    altura: 0.56
}

var leona = {
    nombre: 'Leona',
    apellido: 'Chan',
    altura: 1.2
}

var personas = [isabel, horacio, jimbo, leona]
//se puede acceder a la informacion de este array en console log persona[1].altura persona[0].nombre, etc
/*for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}`)
    
}*/


//var personasAltas = personas.filter(function (persona) {
//    return personas.altura > 1.8    
//} )

//Filtro de elementos del array
const esAlta = ({altura}) => altura > 1.8

//filter nos devuelve un array nuevo
var personasAltas = personas.filter(esAlta)

console.log(personasAltas)

//filtrado de personas bajas

const esBaja = ({altura}) => altura < 1.8
var personasBajas = personas.filter(esBaja)

console.log(personasBajas)

//filtrado de arrays
//para filtrar se necesitan dos cosas un array y una condicion, en este caso la condición será una funcion