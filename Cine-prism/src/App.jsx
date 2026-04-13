
import './App.css'
import './App.css'

function App() {
 
  return (
    <>
     <nav className="navbar">
  <h1 className="logo">Cine Prism</h1>

  <div className="search-container">
    <input
      type="text"
      placeholder="Search movies..."
      id="input-search"
    />

    <div id="search-results"></div>

    <button id="buscar">Search</button>
  </div>
</nav>

<header className="hero">
  <span>MOVIE OF THE WEEK</span>
  <h3 id="titulo-pelicula-semana"></h3>
</header>

<div className="week-movie">
  <main className="movie-container">

    <img
      src="./images/scream-7.webp"
      id="movie-poster"
      alt="movie"
    />

    <div className="info-movieweek">
      <h2 id="titulo-pelicula"></h2>
      <p id="movie-desc"></p>
      <button>Ver mas informacion</button>
    </div>

  </main>
</div>

<div className="title-featured">
  <h2>Featured films</h2>
</div>

<div className="buttons-films">
  <button>All</button>
  <button>New releases</button>
  <button>Billboard</button>
  <button>Presale</button>
  <button>Ready</button>
</div>

<footer className="footer">
  <p>My Website. All rights reserved</p>
  <a href="#">Privacy Policy</a>
  <a href="#">Contact us</a>
</footer>

<div id="movies-main" className="container-featured">
</div>



    </>

    
  )
}

export default App
