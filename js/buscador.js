const queryStringObj = new URLSearchParams(location.search);
const terminoBuscado = queryStringObj.get("Buscar") || "";

const titulo = document.querySelector(".titulo-busqueda");
const contenedorProductos = document.querySelector(".divprod");
const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(terminoBuscado)}`;

fetch(url)
    .then(function (response) {
        if (!response.ok) {
            throw new Error("No se pudieron cargar los productos.");
        }
        return response.json();
    })
    .then(function (data) {
        const productos = data.products;
        let contenidoHTML = "";

        if (productos.length === 0) {
            titulo.textContent = `No hay resultados para el término: ${terminoBuscado}`;
        } else {
            titulo.textContent = `Resultados de búsqueda para: ${terminoBuscado}`;

            for (let i = 0; i < productos.length; i++) {
                const producto = productos[i];
                contenidoHTML += `
                <article class="artproductos">
                    <img class="imgproductos" src="${producto.thumbnail}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    <p>$${producto.price}</p>
                    <a href="./producto.html?id=${producto.id}">Ver Más</a>
                </article>`;
            }
        }

        contenedorProductos.innerHTML = contenidoHTML;
    })
    .catch(function (error) {
        console.log("Error al buscar productos: " + error);
    });