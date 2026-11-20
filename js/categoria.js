let queryString = location.search;
let queryStringObj= new URLSearchParams(queryString);
let categoria = queryStringObj.get('category');

let tituloCategoria = document.querySelector('.prodh2');
let contenedorProductos = document.querySelector('.divprod');

tituloCategoria.innerHTML = categoria;

let url = `https://dummyjson.com/products/category/${categoria}`;

fetch (url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let productos = data.products;
        let contenidoHTML = "";
    
        for (let i = 0; i < productos.length; i++) {
                let producto = productos[i];

                contenidoHTML += `
                <article class="artproductos">
          <img class="imgproductos" src="${producto.thumbnail}" alt="${producto.title}">
          <h3>${producto.title}</h3>
          <p>${producto.description}</p>
          <p>$${producto.price}</p>
          <a href="./producto.html?id=${producto.id}">Ver Más</a>
                </article>`;
        }

    contenedorProductos.innerHTML = contenidoHTML;
    })
        .catch(function(error) {
            console.log("Error: " + error);
        });
