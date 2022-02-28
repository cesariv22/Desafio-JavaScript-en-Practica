const formulario = document.getElementById("formulario");
const resultado = document.querySelector(".resultado");
const nombre = document.getElementById("nombre").value.trim();
const asunto = document.getElementById("asunto").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();
const nombreError = document.querySelector(".error__nombre");
const asuntoError = document.querySelector(".error__asunto");
const mensajeError = document.querySelector(".error__mensaje");
const validarTexto = /[^A-Z|\s]|^\s|^$/gi;

const validarForm = (event) => {
    event.preventDefault();
    nombreError.textContent = "";
    asuntoError.textContent = "";
    mensajeError.textContent = "";
    resultado.textContent = "";

    if (validarTexto.test(nombre.value)) {
        nombreError.textContent = "El nombre es requerido."
    }
    if (validarTexto.test(asunto.value)) {
        asuntoError.textContent = "El asunto es requerido."
    }
    if (validarTexto.test(mensaje.value)) {
        mensajeError.textContent = "El mensaje es requerido."
    }
    if (!validarTexto.test(nombre.value) && !validarTexto.test(asunto.value) && !validarTexto.test(mensaje.value)) {
        resultado.textContent = "Mensaje enviado con éxito!!!"
    }
}
formulario.addEventListener("submit", validarForm)
