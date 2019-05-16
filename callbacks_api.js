//para hacer un request siempre debemos saber la url a la que queremos hacerle request
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const PLANET_URL = 'planets/:id'

//const lukeURL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain:true }

//callback: funcion que se ejecutará en algún futuro que será llamada por $.get

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        //el método fail es un callback que se invoca cuando existe error en el request
        $
        .get(url, opts, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function obtenerPlaneta(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PLANET_URL.replace(':id',id)}`

        $.get(url, opts, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
    
}


async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
        
    }
}
    
async function obtenerPlanetas(){
    var idsPlanet = [1,2,3,4,5]
    var promesas = idsPlanet.map(id =>obtenerPlaneta(id))
    try {
        var planetas = await Promise.all(promesas)
        console.log(planetas)
    } catch (id) {
        onError(id)
        
    }
}

//funcion callbacK: lo que se pierde con los callbacks es el paralelismo del request, pero se conseva
//el orden en el que llegan los request

function onError(id){
    console.log(`Error al obtener el personaje/planeta ${id}`)
}

obtenerPersonajes()
obtenerPlanetas()

/*
obtenerPersonaje(1)

    .then(function (persona){
        console.log(`El personaje es ${persona.name}`)
    })
    .catch(onError)
  .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)
    })


obtenerPlaneta(1)
    .then(planeta => {
        console.log(`El planeta 1 es ${planeta.name}`)
        return obtenerPlaneta(2)
    })
    .then(planeta => {
        console.log(`El planeta 2 es ${planeta.name}`)
        return obtenerPlaneta(3)
    })
    .then(planeta =>{
        console.log(`El planeta 3 es ${planeta.name}`)
        return obtenerPlaneta(4)
    })
    .then(planeta => {
        console.log(`El planeta 4 es ${planeta.name}`)
    })

    

function (persona) {
    console.log(`Hola, yo soy ${persona.name}, nací en el año ${persona.birth_year}`)})

//al ejecutar un request no sabemos en que orden el server nos va a responder
//obtenerPersonaje(1)
//obtenerPersonaje(3)
//al callback que se ejecuta uno dentro de otro se le llama callbackhell 

*/
/*
var promesas = ids.map(function (id){
    return obtenerPersonaje(id)
}
*/