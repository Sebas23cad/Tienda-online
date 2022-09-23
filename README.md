# Tienda-online

![](https://static.platzi.com/cdn-cgi/image/width=480,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png)

## Prueba de Javascript

### Test de javascript

1. Variables
   1. Responde las preguntas:
        Una variable es un espacio en memoria que normalmente se usa para almacenar objetos o valores.
        La diferencia es simple al declarar solo la creas en memoria y al inicializar le agregas el valor.
        La diferencia es que al sumar asemos la operacion algebraica osea añadimos un valor a otro para tener un resultado, pero al concatenar lo que hacemos es juntar el texto en uno por eso se llama cadena de caracteres.
        El operador por excelencia y unico creo es la suma. LO dije asi para que se lea mas profesional😉
   2. Determina el tipo de dato
     - string
     - string
     - string
     - number
     - string
     - boleano o number
     - boleano o number
     - boleano o string
   3. Traducir a codigo:
```javascript
let nombre = "Sebitas" // string
let apellido = "Castillo" // string
let usuario = "Sebasjc1" // string
let edad = 12 // number
let correo = "example@gmail.com" // string pero habria que hacer validaciones para que se verifique que es un correo
let mayor = true // booleano or number
let dinero = 1500 // number or booleano
let deudas = 400 // boolean or number
let dineroTotal = dinero - deudas

console.log(`Hola mi nombre completo es: ${nombre} ${apellido}`)
console.log(`El dinero total que tengo es: ${dineroTotal}`)
```
2. Funciones.
   1. Responde:
        Una funcion es una operacion que realizamos con los parametros que le pasamos para que nos devuelva un resultado.
        Una funcion normalmente se utiliza para implementar nuevas funcionalidades o para encapsular codigo que es muy similar y lo que cambia son unas variables.
        Los parametros son las variables que necesita la funcion para ejecutarse, y los argumentos son los valores reales que le pasamos a nuestra funcion como nuestros parametros pero al momento de darle las variables se le conoce como argumentos.
   2. Convierte en una funcion
```javascript
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
// Solucion

function nombre(name, lastname, nickname) {
    console.log(`Mi nombre completo es ${name} ${lastname}, pero prefiero que me digan ${nickname} '.'`);
}

nombre(name, lastname, nickname)
```
3. Condicionales
   1. Responde:
        Una condicional son reglas que nos permiten determinar a donde nos dirijimos o cual es nuestro camino, es decir, piensalo como la seria de What if? de marvel eso es una condicional una serie de posibilidades que dependiendo de lo que pase se hara algo o en ese caso seguira un camino o destino diferente.
        Hay dos tipos la primera es el if, else if, else que para lo que se utiliza es para crear diferentes caminos para una solucion, tambien tenemos el switch, case, break que lo usamos para definir diferentes casos para que se realice acciones. Ahora que no es lo mismo y no pero si, son simililares pero debes aprender a usar en cada caso, por ejemplo el while lo puedes usar para cuando te tomen lista y digan tu nombre dices presente, ahora el if nos sirve para definir caminos como un juego de piedra papel o tijera. Claro los dos se pueden usar en lo mismo pero debes ver cual es el mejor.
        Si se puede combinar las funciones con condicionales, de hecho es muy comun hacerlo.
   2. Replica con un if:
```javascript
const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if(tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("4 integrantes pueden tomar TODOS los cursos de Platzi durante un año, tu suscripcion es family");
}

let suscripciones = ["Free", "Basic", "Expert", "ExpertPlus", "ExpertFamily"]
let tuSus = promp("Escribe cual es tu suscripcion: ")
let opcion = 0

function saberSuscripcion (tusus) {
    if (tipoDeSuscripcion === "Free") {
    opcion = 0
} else if (tipoDeSuscripcion === "Basic") {
    opcion = 1
} else if(tipoDeSuscripcion === "Expert") {
    opcion = 2
} else if(tipoDeSuscripcion === "ExpertPlus") {
    opcion = 3
} else {
    opcion = 4
}
return opcion
}
suscripciones[opcion] === tuSus ? `Tu suscripcion es: ${tuSus}` : "No tienes una suscripcion"
```
4. Ciclos
   1. Responde:
        Un ciclo es una serie de acciones que pasan una cantidad indefinida de ocaciones hasta que cumplna una condicion.
        Aqui tenemos tres posibilidades: El for, for of, while. Cada uno tiene su caso y tambien se pueden usar todos para lo mismo solo que cada uno es mejor en un area.
        Un ciclo infinito es uno en el que la condicion nunca llega a ser mentira y es un problema ya que puede trabar y dañar nuestra computadora, osea nunca llega a cumplir una condicion asi que nunca para de ejecutarse.
        Pues si es tambien comun hacerlo ya que hay casos en que la logica necesita mesclar estas.
   2. Recopila:
```javascript
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
j = 10
i = 0

while (i < 5) {
    i++
    console.log("El valor de i es: " + i)
}

while(j >= 2) {
    console.log("El valor de j es: " + j)
    j--
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
   3. Codigo:
```js // Puedes poner la extenccion del archivo o que se maneja en ese lenguaje de programacion
let usuario = prompt("Cuanto es la suma de 2 + 2: ")
if (usuario == 4) {
    console.log("Eres un genio acertaste. La respuesta es 4")
} else {
    console.log("Considera volver a intentarlo y piensalo, mejor")
}
```
5. Listas
   1. Responde:
        Un array basicamente es una lista de datos o estructura de datos, en donde puede almacenar todo, pero todo tipo de dato desde un NaN hasta un objeto.
        Un objeto es un tipo de dato que tiene comportamientos y atributos, es decir, es la representacion de un objeto de la vida real en programacion.
        Un array nos puede servir para crear listas de datos y un objeto lo usamos para crear estandares que se repiten y podemos crear mas de uno, es decir, un caso similar a las funciones pero esta ves con objetos. Osea lo usas para crear objetos de forma mas automatica.
        Si la verdad es que si se puede mesclar los arrays con un objeto y viseversa.
   2. Crea una funcion:
```javascript
let array = [1, 2, 3, 4, 5]
function recibir(array) {
    console.log(array[0])
}
recibir(array)

function imprimir(array) {
    for (let i=0; i<array.length; i++) {
        console.log(array[i])
    }
}

imprimir(array)

let car = {
    modelo: "Model s",
    marca: "Tesla",
    annio: 2022
}

function imObjeto(obj) {
    for(let key in obj) {
        console.log(obj[key])
    }
}

imObjeto(car)
```

---
>Lo que vamos a realizar en el resto de estas clases es la resolucion de todas las preguntas. Anotare lo mas importatne y les dejare en diferentes o en uno solo con todas las respuestas en un archivo js.

Aqui les dejo el archivo con el codigo en [javascript](respuestas.js).

---

## Manipulacion del DOM

### Como conectar js con html

Para ejecutar js debemos hacerlo en un entorno de ejecucion y como imaginas son los lugares que nos dejan correr codigo, entonses aqui lo que hacemos es conectar el html con js, y basicamente lo hacemos con la etiqueta script y su src para encontrar el archivo. Ahora es mejor poner al ultimo de todo el body antes de cerrar esa etiqueta para que no haya problemas pero en si lo puedes poner donde quieras. Aqui les dejo el [codigo](index.html) de esta parte. Otra cosa es recomendable siempre tener archivos diferentes para cada tecnologia como html, css y js en un archivo aparte cada uno y enlazandolos solo con src.

### Leyendo HTML desde javascript

Basicamente vamos a usar la funcion `Document.get____` para obtener elementos del documento de html, aqui tenemos varias obsiones el mas comun es cojer elementos por medio del id, pero tambien puedes hacerlo por medio de una clase. Por eso tenemos diferentes formas de obtener ese elemento. Si lo ves como yo es muy pero muy parecido a lo que hace css. Tambien depende desde donde lo uses, hay cosas que solo funcionan en ese entorno de ejecucion en nodejs no funcionan estas ya que no trabaja del mismo modo que el frontend.

---

## Contribucion a proyectos

### Conectando Github a proyectos de JavaScript

Basicamente estamos viendo como configurar github con git para poder trabajar en diferentes proyectos. Tambien vimos como ignorar archivos con git. Para crear los gitignore usaremos esta [pagina](https://www.toptal.com/developers/gitignore/), lo que hace esta pagina es crearte para los usuarios que trabajan en cualquier distribucion de software o herramientas como vscode. Es decir, aqui te soluciona la vida facilmente. Recuerda esto es algo que lo aprendi a la mala siempre crea tu archivo de gitignore y primero has el `add .gitignore` de este archivo y despues si has el `add .` para agregar todo lo que tengas creeme te sera de ayuda.

Una buena practica es solo enviar a tu github lo necesario es desir si tienes ambientes virtuales es mejor crear un archivo dependencias e ignorar todo el ambiente.
Otra cosa importante esque si no sabes como hacer tu rama principal main, bueno solo crea un proyecto sin nada solo con la licencia y sigue los pasos hay te lo hara solo y tambien te conectara tu proyecto con ese repositorio.

### Proyectos en github desde cero

Creamos nuestro proyecto en github. y simplemente podemos añadir todo lo que queramos como readme o licence.
Ahora simplemente has lo que yo hago tambien copia la url ssh o https, la que quieras y si no averigua como usar la tercera opcion y solo haces esto: `git clone URL`, y automaticamente te crea la carpeta con el nombre de tu repositorio y todo esta ya configurado para que hagas push y commits sin necesida de configurarlo. La verdad esto es maravilloso y yo trabajaba asi con todos mis repositorios hasta el momento.
Opciones para usar el vscode en la terminal lo que yo uso es: `code .` me habre en vscode toda la carpeta, claro siempre uso la terminal primero, `code /. -r` este no lo uso mucho porque casi siempre uso la terminal primero para hacer mis cosas pero lo que hace es que en vscode solo te carga la carpeta hay y nada mas.

### Fork a proyectos en github

Es facil hacer un fork solo vas al repositorio que quieres y utilizas el fork y creas un nuevo repositorio, la verdad o puedes crear un clone en donde quieras en mi caso lo hice en una carpeta donde estoy llevando este curso y ya habia hecho el clone anterior pero como te pide que crees deley un git clone entonses por eso lo hice en un repositorio que posteriormente eliminare, y me quedare solo con el que uso actualmente. aqui les dejo los archivos si les queda algo de dudas, [mi github](https://github.com/Sebas23cad/Tienda-online). Para hacer una contribucion debes entender como trabajaron el codigo y que es lo que puedes mejorar y porque se construyo de esa forma. Tambien lo hago porque no quiero hacer una contribucion, ya que yo ya tenia pensado como trabajar asi que igual es tu decision as lo que quieras y buena suerte.

Ultima cosa y ya jaja, mira si haces lo que yo hice te va a pedir que borres el cache ya que estas causando confilto entre repositorios o bien cambies directamente todo tu url para donde quieres dirijido el push, asi que ya sabes tu decides que quieres hacer.

### Analizando codigo de proyectos open-source

Entiende el codigo y como esta construido, y que podemos hacer para ayudar y contribuir, claro si tu quieres si no, simplemente no contribuyas. Y lo unico que hacemos es basicamente solo vamos analizar el codigo.

---

## despliegue

### clases