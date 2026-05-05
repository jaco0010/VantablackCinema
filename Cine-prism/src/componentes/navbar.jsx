function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Cine Prism</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
        />
        <div></div>
        <button>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;