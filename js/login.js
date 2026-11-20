let formulario = document.querySelector('form');
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#Contraseña');

formulario.addEventListener('submit', function(e) {
  if (campoEmail.value === '') {
    e.preventDefault();
    alert('El email es obligatorio');
  } else if (campoPassword.value === '') {
    e.preventDefault();
    alert('La contraseña es obligatoria');
  } else if (campoPassword.value.length < 6) {
    e.preventDefault();
    alert('La contraseña debe tener al menos 6 caracteres');
  } else {
    localStorage.setItem('email', campoEmail.value);
  }
});