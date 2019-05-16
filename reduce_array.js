//reduce lo que hace es reducir un array a un valor único
var isabel = {
    nombre: 'isabel',
    cantidadLibros: 15,
    peso: 60,
    edad:29
}

var horacio = {
    nombre: 'horacio',
    cantidadLibros: 12,
    peso: 90,
    edad:27

}

var alejandra = {
    nombre: 'alejandra',
    cantidadLibros: 18,
    peso:55,
    edad:15
}

var nicolas = {
    nombre: 'nicolas',
    cantidadLibros: 1,
    peso: 70,
    edad:13 
}



var personas = [isabel, horacio, alejandra, nicolas]
/*
var acumulador = 0;

for (let i = 0; i < personas.length; i++) {
    acumulador = acumulador +  personas[i].cantidadLibros
}
console.log(`en total las personas tienen ${acumulador} cantidad de libros`)
*/
//ahora haremos lo mismo que en la parte superior pero con reduce
//para reducir necesitamos dos cosas, el nombre de la funcion y el valor inicial/original del acumulador
// cuando hacemos {cantidadLibros} le indicamos a la funcion que solo accederemos a la cantidad de libros y no al objeto completo
const reducer = (acum, { cantidadLibros}) => acum + cantidadLibros

var totalLibros = personas.reduce(reducer, 0)

console.log(`en total las personas tienen ${totalLibros} cantidad de libros`)

//contador de kilos

const reduceKilos = (acumPeso, { peso }) => acumPeso + peso

var totalKilos = personas.reduce(reduceKilos, 0)


console.log(`el total de kilos de las personas es ${totalKilos}`)


const sumaEdad = (acumEdad, { edad } ) => acumEdad + edad
var totalEdad = personas.reduce(sumaEdad, 0)



console.log(`la suma de todas las edades es ${totalEdad}`)
