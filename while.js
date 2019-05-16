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
const comeMucho =  () => Math.random() < 0.3
const realizaDeporte = () => Math.random() <0.4

const META = isabel.peso - 3
var dias = 0

while (isabel.peso > META) {
    if(comeMucho()){
        aumentarDePeso(isabel)
    }
    if(realizaDeporte()){
        adelgazar(isabel)
    }
    dias += 1 
}

console.log(`Pasaron ${dias} días hasta que ${isabel.nombre} adelgazo hasta llegar a los ${isabel.peso.toFixed(1)} kilos`)