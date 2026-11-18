window.addEventListener('load', function() {

let queryString = location.search;
let urlParams = new URLSearchParams (queryString);
let productID = urlParams.get('id');

fetch('https://dummyjson.com/products/' + productID)
    .then(function(response) {
        return response.json();
    })
    .then(function(producto) {
        
let imgID = document.querySelector('#product-img');
imgID.src = producto.images[0];
imgID.alt = producto.title;

let nombreElemento = document.querySelector('#product-nombre');
nombreElemento.innerHTML = producto.title;

let brandElemento = document.querySelector('#product-marca');
brandElemento.innerHTML = "Marca: " + producto.brand;

let precioElemento = document.querySelector('#product-precio');
precioElemento.innerHTML = producto.price + " €";

let stockElement = document.querySelector('#product-stock');
 stockElement.innerHTML = "Stock: " + producto.stock;

let descElemento = document.querySelector('#product-descripcion');
descElemento.innerHTML = producto.description;

let categoriaEnlace = document.querySelector('#product-categoria');
categoriaEnlace.innerHTML = producto.category;
categoriaEnlace.href = "./categoria.html?name=" + producto.category;

let tagsContainer = document.querySelector('#product-tags');
if (tagsContainer && producto.tags) {
    tagsContainer.innerHTML = "";
    for (let i = 0; i < producto.tags.length && i < 3; i++) {
        let li = document.createElement('li');
        li.innerHTML = producto.tags[i];
        tagsContainer.appendChild(li);
    }
}

let reviewsContainer = document.querySelector('#reviews-container');
reviewsContainer.innerHTML = "";

let reviews = producto.reviews;
     if (reviews && reviews.length > 0) {
        for (let j = 0; j < reviews.length; j++) {
            let unReview = reviews[j];
            
            let reviewDiv = document.createElement('div')
            
            reviewDiv.innerHTML = 
            "<p><strong>Usuario: </strong> " + unReview.reviewerName + "</p>" +
            "<p><strong>Rating: </strong> " + unReview.rating + " / 5</p>" +
            "<p><strong>Comentario: </strong> " + unReview.comment + "</p>";

            reviewsContainer.appendChild(reviewDiv);
        }
     } else {
        reviewsContainer.innerHTML = "<p>Este producto no tiene opiniones todavia.</p>";
     }
    })
    .catch(function(error) {
        console.log("hubo un error: " + error);
    });
});