var horacio = {
    nombre: 'horacio',
    apellido: 'salas',
    edad: 27,
    estado_civil: 'casado'

}

function imprimirObjeto(persona){
    //var nombre = persona.nombre (esta linea es igual a escribir lo de abajo)
    var {nombre} = persona
    var {apellido} = persona
    console.log(nombre.toUpperCase())
    console.log(`${nombre} ${apellido}`)
}


//funcion que  incrementa la edad 
function cumpleanos(persona) {
    persona.edad += 1
}

//si no queremos modificar la edad del objeto que tenemos creado
//esta funcion nos retornara un objeto nuevo copiando todo lo que tiene el objeto anterior
//solo le agregará al objeto nuevo un año
function agregaEdad(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

imprimirObjeto(horacio)
