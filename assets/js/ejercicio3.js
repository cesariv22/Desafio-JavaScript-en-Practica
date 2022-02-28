const resultado = document.querySelector(".resultado")
const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")
const btnSumar = document.getElementById("btn-sumar")
const btnRestar = document.getElementById("btn-restar")

btnSumar.addEventListener("click", function () {
    const suma = (parseInt(valor1.value)) + (parseInt(valor2.value))
    resultado.innerHTML = suma
    console.log(suma);
})
btnRestar.addEventListener("click", function () {
    const resta = (parseInt(valor1.value)) - (parseInt(valor2.value))
    resultado.innerHTML = resta
    if (resta < 0) {
        resultado.innerHTML = 0
    }
    console.log(resta);
})