// nos permite decidir que codigo ejecutar dependiende de multiples condiciones
//ejercicio horoscopo
//prompt: funcion que permite mostrar una pregunta al usuario y pedir datos por pantalla

var signo = prompt('Cual es tu signo?')


switch (signo) {
    case 'acuario':
        console.log('eres acuario.. tendras un lindo dìa')
        break;
    case 'cancer':
    case 'cáncer':
        console.log('eres cáncer.. que te vaya bien')
        break;

    default:
        console.log('no es un signo sodiacal válido')
        break;
}


//la palabra break impide que el programa siga preguntando por la siguiente opción hasta que encuentre una condicion
//default es un controlador para cuando el usuario ingresa cualquier valor que no es concidente con los case

