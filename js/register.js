let formulario = document.querySelector('.formRegistro')

let campoEmail = document.querySelector('#Email')
let campoPassword = document.querySelector('#Contraseña')
let campoRepetir = document.querySelector('#repetirContraseña')

let errorEmail = document.querySelector('.errorEmail')
let errorPassword = document.querySelector('.errorPassword')
let errorRepetir = document.querySelector('.errorRepeat')

formulario.addEventListener("submit", function() {
    evento.preventDefault();

    errorEmail.innerHTML = "";
    errorPassword.innerHTML = "";
    errorRepetir.innerHTML = "";

let hayErrores = false;

if (campoEmail.value == "") {
    errorEmail.innerHTML = "El campo email es obligatorio";
    hayErrores = true;
}

if (campoPassword.value == "") {
    errorPassword.innerHTML = "El campo contraseña es obligatorio";
    hayErrores = true;
} else if (campoPassword.value.length < 6) {
    errorPassword.innerHTML = "La contraseña debe tener al menos 6 caracteres";
    hayErrores = true;
}

if (campoPassword.value != campoRepetir.value) {
    errorRepetir.innerHTML = "Las contraseñas no coinciden";
    hayErrores = true;
}

if(hayErrores == false) {
    window.location.href = "./login.html";
}

});