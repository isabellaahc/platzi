var isabel = {
    nombre: 'Isabel',
    edad: 29,
    peso: 61
}

console.log(`Al inicio del año ${isabel.nombre} pesaba ${isabel.peso} kilos`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona =>  persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random = Math.random()

    if(random < 0.25){
        //aumenta de peso
        aumentarDePeso(isabel)
    }else if (random < 0.5){
        //adelgazar
        adelgazar(isabel)
    }
    
}

console.log(`Al final del año ${isabel.nombre} pesará ${isabel.peso.toFixed(1)} kilos`)
