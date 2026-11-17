
fetch('https://dummyjson.com/products/categories')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  let lista = document.querySelector('.categoria-ul');
  let categorias = '';

  for (let i = 0; i < data.length; i++) {
    categorias += '<li><a href="./categoria.html">' + data[i].name + '</a></li>';
  }

  lista.innerHTML = categorias;
})
.catch(function(error) {
  console.log("Error: " + error);
})

// ---- PRODUCTOS ----
fetch('https://dummyjson.com/products')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  let contenedor = document.querySelector('#listaProductos');
  let productos = '';

  for (let i = 0; i < data.products.length; i++) {
    productos += '<article class="artproductos">' +
                   '<img class="imgproductos" src="' + data.products[i].thumbnail + '" alt="' + data.products[i].title + '">' +
                   '<h3>' + data.products[i].title + '</h3>' +
                   '<p>' + data.products[i].description + '</p>' +
                   '<p>$' + data.products[i].price + '</p>' +
                   '<a href="./producto.html">Ver Más</a>' +
                 '</article>';
  }

  contenedor.innerHTML = productos;
})
.catch(function(error) {
  console.log("Error: " + error);
})