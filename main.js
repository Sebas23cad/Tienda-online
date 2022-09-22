const input1 = document.getElementById('calculo')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const pResult = document.getElementById('result')

function btnOnclick() {
    // solucion del ejercicio
    // console.log(Number(input1.value) + Number(input2.value));

    const sumaInputs = input1.value + input2.value
    pResult.innerHTML = "Resultado: " + sumaInputs
}