// Variables. Se recomienda que se deje de usar var y usemos let (lo usamos para poder cambiar el contenido en un futuro)y const (Esta es una constante y no puede ser alterada entre comillas).

let nombre = "Cualquiera"
nombre = "Manolo" // Se cambia el valor a reinicializar
const apellido = "Cabezas"
apellido = 'Camacho' // nos sale error porque no se puede

// Podemos utilizar las comillas simples o dobles para un string.

// Funciones. Aqui en las funciones todo esta bien solo vamos anotar las coasas que estan mal. o cosas que a mi me parescan importante.

function saludo(name, lastname, nickname) {
    console.log(`Mi nombre es: ${name} ${lastname}, pero personalmente me gusta que me digan o me llamen por mi nickname: ${nickname}`);
}

saludo('Maritza', 'Cabezas', 'Cabesilla')

// Condicionales.
// Bueno la verdad mi codigo esta super bien y en esta parte no es necesario copiar nada.

// Ciclos
// Hasta aqui todo lo que hemos hecho esta bien asi que podemos continuar.

let respuesta;

while (respuesta != 4) {
    let opcion = promt('Cuanto es 2 + 2')
    respuesta = opcion
}

// Arrays.
// La verdad no se que paso a mi codigo en mi ejercicio pero la logica esta bien. Si sabes que pasa avisame, entonses aqui les dejo la solucion del profe. La verdad ya lo solucione solo fue un error de sintaxis como lo suponia pero que error puse objeto enves de objecto que tambien me equivoque jajaj 🤣. Pero dios mio que estres pana jaja sin saber que miercoles por la tarde estaba pasando

let arr = [1, 2, 3, 4, 5, 56];

function imprimirPrimer(arra) {
    console.log(arra[0]);
}

function imprimirElementos(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}

// Esta es mi solucion dos punto cero.
let myCar = {
    model: 'Spark',
    marca: 'Tesla',
    annio: 2022,
    tipo: 'Electrico'
}

function imprimirObjeto(objs) {
    for (const key in objs) {
        console.log(key);
        console.log(`Esta es la llave de nuestro objeto: ${key} y este es su valor: ${objs[key]}`);
    }
}

imprimirObjeto(myCar)

// Esta es la solucion del profe mismo resultado, diferente logica y cualquiera es mejor dependiendo como lo veas
const arr2 = Object.values(myCar)

imprimirElementos(arr2)
// la solucion bonus

function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}

// Mi otra solucion 2.0, significa que lo volvi a realizar

let suscripcion = {
    Free: 1,
    Basic: 2,
    Expert: 3,
    ExpertDuo: 4
}

let usur = prompt('Que tipo de suscripcion tienes')

function elijeSub(usuario) {
        if (suscripcion[usuario]) {
            console.log(`Esta es tu suscripcion ${usuario}`);
            return;
        }
        console.warn('No tienes una suscripcion');
}

elijeSub(usur)

// Solucion del profe

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
    expertFamily: 'Tu y tres mas pueden tomar todos los cursos de platzi durante un año'
};

let usuarioSup = prompt('Cual es tu suscripcion')

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}

conseguirTipoSuscripcion(usuarioSup)