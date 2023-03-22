import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SearchPage.scss';
import { Link, useLocation } from 'react-router-dom';
import { getSearchedMovies } from '../services/movie';

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('value');

  useEffect(() => {
    setIsLoading(true);
    getSearchedMovies(query)
      .then(result => {
        setMovies(result.results);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.error(error);
      });
  }, [query]);

  return (
    <div className='moviesWrapper'>
      {isLoading ? (
        <p>Yükleniyor...</p>
      ) : movies.length !== 0 ? (
        <>
          <h3 className='title'>Bulunan Filmler</h3>
          <div className='movies'>
            {movies.map(movie => (
              <div key={movie.id} className='movie'>
                <Link to={`/movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h3>"{query}" değerine karşılık sonuç bulunamadı.</h3>
      )}
    </div>
  );
}

export default SearchPage;
