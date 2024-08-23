import React, { useEffect, useState } from 'react';

function Slider() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=79e078d4996d5cdcf67d8028ebff12fd&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error('Fallamos en cargar los datos');
        }
        const data = await response.json();
        setMovies(data.results || []); //  data.results tiene que ser un array
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="slider">
      {movies.length > 0 ? (
        movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))
      ) : (
        <div>No se encontraron pelìculas</div>
      )}
    </div>
  );
}

export default Slider;