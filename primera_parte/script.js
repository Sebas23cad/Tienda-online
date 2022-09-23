// Este lo usamos para seleccionar los objetos con su nombre, clase o id. Es igual o parecido a css.
// Aqui esta el codigo de prueba
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafo')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

// Aqui nos muestra todas las propiedades de nuestros obejtos, pero si quieres solo ver lo que lleva o la etiqueta solo pones el console.log(h1) o h1.evento
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

// Tambien podemos usar el get pero este es un poquito diferente y por lo que se ve parece que va a ser mejor usar el query ya que la sintaxis es similar a css

// Para poder modificar un objeto desde js usamos innerHtml, debes saber como protegerte de usuarios malisios ya que esto lo pueden hacer todos.
h1.innerHTML = 'Maniatica, fantastica, no plastica';
p.innerText = 'Me vale y modifique el parafo haaaa';
console.log(h1.getAttribute('plantilli'));
p.setAttribute('parrafo', 'parrafos');
h1.classList.add('verde');
h1.classList.remove('verde');
// h1.classList.toggle('verde);
// h1.classList.contains('verde');

input.value = "Manolo"

// Crear elementos "desde cero"

const img = document.createElement('img')

img.setAttribute('src', 'https://lh3.googleusercontent.com/jUoaTIlBn5ibfQcND2n5OMD6Z7xoqNj-ShHlFR6QuLffLXD5pS8V2eNg1rGlrsRrnDkoQ28O8UHzqzBQKAGY4l1CS2NQSq2SkRScK6FOjl82jppyohK-')

console.log(img);

pid.append(img);