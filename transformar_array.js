//la funcion map nos creará un nuevo array en el cual modifique cada elemento que le pasemos del array original
//transformar la altura de las personas de cms a mts
var isabel = {
    nombre: 'isabel',
    apellido: 'anabalon',
    altura:1.56,
    peso: 60
}

var horacio = {
    nombre: 'horacio',
    apellido: 'salas',
    altura: 1.82,
    peso: 90
}

var personas =  [isabel, horacio]

// si se va  a pasar solo 1 parametro, no hace falta poner persona entre parentesis
const pasarAlturaACms = persona => ({ 
    ...persona,
    altura: persona.altura * 100
})
    //persona.altura = persona.altura*100
    //persona.altura *= 100
    //para no modificar el array original, se retorna un nuevo objeto con la persona desglozada y se pisa
    //el atributo altura, este es un objeto nuevo que no tiene  nada que ver con el objeto anterior
       

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)

const pasarKilosToneladas = persona =>({
    ...persona,
    peso: persona.peso/1000
})

var personasToneladas = personas.map(pasarKilosToneladas)

console.log(personasToneladas)


