let linkLogout = document.querySelector('#logout');

if (linkLogout !== null) {
  linkLogout.addEventListener('click', function() {
    localStorage.removeItem('email');

    menu.innerHTML = '<li><a href="./index.html">Home</a></li>' +
                     '<li><a href="./login.html">Login</a></li>' +
                     '<li><a href="./register.html">Registro</a></li>';
  });
}