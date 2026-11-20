let email = localStorage.getItem('email');
let menu = document.querySelector('.ulprincipal');

if (email !== null) {
  menu.innerHTML = '<li><a href="./index.html">Home</a></li>' +
                   '<li>Bienvenido: ' + email + '</li>' +
                   '<li><a href="#" id="logout">logout</a></li>';
}