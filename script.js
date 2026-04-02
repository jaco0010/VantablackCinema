
const titulo = document.getElementById('titulo-pelicula');
const sinopsis = document.getElementById('movie-desc');
const imagen = document.getElementById('movie-poster');
const pelicula = document.getElementById("movies-main")
const botonBuscar = document.getElementById("buscar")
const inputBuscar = document.getElementById("input-search")
let todasLasPeliculas = []

const miLlave = '76456af74c9794a3b514f20d09f67161'; 

function cargarPeliculas() {
    console.log("1. Botón clickeado");

  const url = 'https://api.themoviedb.org/3/movie/now_playing';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjQ1NmFmNzRjOTc5NGEzYjUxNGYyMGQwOWY2NzE2MSIsIm5iZiI6MTc3NDQwMjg4My45NTgwMDAyLCJzdWIiOiI2OWMzM2Q0MzNmZDdmZmIxNWYwNmMwMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jIbkIEYR6Ryn2TOCR0x1f2CyXH1hFMixKBJEjZfJQhk'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => {
   todasLasPeliculas = json.results;

     mostrarPeliculas(todasLasPeliculas)
  })
  .catch(err => console.error(err));
};

cargarPeliculas()

botonBuscar.addEventListener("click", function() {
  let buscador = inputBuscar.value.toLowerCase()
  console.log("funciona")

  let filtradas = todasLasPeliculas.filter(function(pelicula) {
    return pelicula.original_title.toLowerCase().includes(buscador)
  }) 
  mostrarPeliculas(filtradas)
})

function mostrarPeliculas (lista) {
pelicula.innerHTML = lista.map(movie => `
      <div class="movie-container">
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" />
      </div>
      <div class="info-movie">
        <h3>${movie.original_title}</h3>
        <p>${movie.vote_average}</p>
        <button>Buy tickets<button>
        </div>
    `).join("");
  };

