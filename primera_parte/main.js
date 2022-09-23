const input1 = document.getElementById('calculo')
const input2 = document.getElementById('calculo2')
const form = document.getElementById('form')
const btn = document.getElementById('btnCalcular')
const pResult = document.getElementById('result')

// Aqui no debes usar parentesis por eso en el curso basico nunca pusimos parentesis para llamar elementos de html.
form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) {
    // Mira el argumento que le mandamos es el que pordefecto envia el addEventListener a nuestra funcion
    event.preventDefault();
    // solucion del ejercicio
    // console.log(Number(input1.value) + Number(input2.value));

    const sumaInputs = input1.value + input2.value
    pResult.innerHTML = "Resultado: " + sumaInputs
}