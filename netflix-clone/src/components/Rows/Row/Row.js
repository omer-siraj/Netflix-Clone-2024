import React, { useEffect, useState } from 'react';
import './row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.error('Trailer not found:', error));
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="row_posters">
          {movies.map((movie) => {
            const imagePath = isLargeRow ? movie.poster_path : movie.backdrop_path;
            if (!imagePath) return null;

            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow ? 'row_posterLarge' : ''}`}
                src={`${base_url}${imagePath}`}
                alt={movie?.name || 'Movie'}
              />
            );
          })}
        </div>
      )}

      {trailerUrl && (
        <div className="videoWrapper">
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;
