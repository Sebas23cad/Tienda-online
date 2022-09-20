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