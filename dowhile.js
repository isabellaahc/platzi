var isabel = {
    nombre: 'isabel',
    apellido: 'anabalon',
    edad: 29
}

var contador = 0
const llueve = () => Math.random() < 0.25

function name(params) {
    
}

do {
    contador++
} while (!llueve())

if(contador > 1 ){
    console.log(`fui a ver si llovia ${contador} veces`)
}else{
    console.log(`fui a ver si llovia ${contador} vez`)
}

