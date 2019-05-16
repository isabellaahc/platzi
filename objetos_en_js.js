//prototipos en js son clases 
//prototipo de persona

function Persona(nombre, apellido, edad, altura){
    //atributo = nombre que se recibe por parametro
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y mido ${this.altura}`)
}

Persona.prototype.imprimirAltura = function () {
    if (this.altura >= 1.8) {
        console.log('soy alto')
        
    }else{
        console.log('soy bajita')
    }     
}

//la palabra new seguida del protetipo lo que hace es crear un nuevo objeto y a ese objeto sele asigna como prototipo
// el que se escriba después, luego se ejecuta el constructor (function) e implicitamente retorna el objeto que se acaba de construir
var isabel = new Persona('isabel','anabalon', 29, 1.56)
var horacio = new Persona ('horacio', 'salas', 27, 1.81)
var alejandra = new Persona('alejandra', 'fuentes', 30, 1.7)

//si hay algo malo en js no se sigue ejecutando el código.



isabel.saludar()
horacio.saludar()
isabel.imprimirAltura()
horacio.imprimirAltura()
alejandra.imprimirAltura()

