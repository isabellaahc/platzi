class Persona  {
    constructor (nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
       
    //null va a sr siempre false al igual que 0. Todo lo que esté contenido dentro del ()
    // como por ejemplo ([]) es true un string es verdadero. undefined dentro de un if es false
    saludar(fn){
        var {nombre , apellido} = this
        console.log(`hola me llamo ${nombre}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }
    
    esJoven(){
        if (this.edad > 18) {
            console.log('es mayor de edad')
        }else{
            console.log('es menor de edad')
        }
    }

}

class Desarrollador extends Persona{
    constructor(nombre, apellido, edad){
        super(nombre,apellido,edad)
    }

    saludar(fn){
        var {nombre , apellido} = this
        //var nombre = this.nombre
        //var apellido = this.apellido
        console.log(`mi nombre es ${nombre} y soy desarrollador/a`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`no sabía que eras Desarrollador`)
    }
}

var isabel = new Persona ('isabel', 'anabalon', 29)
var horacio = new Desarrollador ('horacio','salas',27)
isabel.saludar(responderSaludo)
horacio.saludar(responderSaludo)
