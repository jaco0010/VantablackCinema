function FeaturedMovies() {
  return (
    <>
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

      <div className="container-featured">
        {/* Aquí van las películas dinámicas */}
      </div>
    </>
  );
}

export default FeaturedMovies;