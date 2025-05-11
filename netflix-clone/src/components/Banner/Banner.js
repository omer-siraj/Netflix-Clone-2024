import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './banner.css';

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const results = request.data.results;
        if (results.length > 0) {
          setMovie(results[Math.floor(Math.random() * results.length)]);
        }
      } catch (error) {
        console.error('Error fetching banner movie:', error);
      }
    })();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: movie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
          : 'none',
        backgroundPosition: 'center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;
