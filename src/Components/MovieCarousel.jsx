import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './../Components/MovieCarousel.css';

function MovieCarousel() {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=79e078d4996d5cdcf67d8028ebff12fd&language=en-US&page=1'
        );
        const data = await response.json();
        const movie = data.results[0]; // Supongamos que solo quieres la primera película
        setMovie(movie);

        // Llama a la API para obtener el trailer
        const trailerResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=79e078d4996d5cdcf67d8028ebff12fd&language=en-US`
        );
        const trailerData = await trailerResponse.json();
        const trailer = trailerData.results.find(
          video => video.type === 'Trailer' && video.site === 'YouTube'
        );
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        }
      } catch (error) {
        console.error('Error fetching movie or trailer:', error);
      }
    };

    fetchMovie();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-carousel">
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Release Date: {movie.release_date}</p>

        {/* El botón abre el modal con el tráiler */}
        
        <button className="watch-button" onClick={openModal} disabled={!trailerUrl}>
          Ver el trailer
        </button>
        <button className="info-button">
          Más detalles
        </button>
      </div>
      <div className="movie-poster">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} 
        />
      </div>

      {/* Modal para mostrar el tráiler */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {trailerUrl ? (
          <iframe
            width="100%"
            height="400"
            src={trailerUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>
        ) : (
          <div>Trailer no Disponible</div>
        )}
      </Modal>
    </div>
  );
}

export default MovieCarousel;

