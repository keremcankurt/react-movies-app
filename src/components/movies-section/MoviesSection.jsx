import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MoviesSection.scss';
import { Link } from 'react-router-dom';
import { getMoviesByGenre } from '../../services/movie';

function MoviesSection({ genre_id, title }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true, // Autoplay özelliği
        autoplaySpeed: 3000, // Otomatik kaydırma hızı
    };

    const [movies,setMovies] = useState([]);
    useEffect(() => {
        getMoviesByGenre(genre_id)
            .then(result=> setMovies(result.results))
    }, []);
    return (
        <div className='moviesWrapper'>
            <h3 className='title'>{title}</h3>
            <Slider {...settings}>
                {movies.map(movie => (
                    <div key={movie.id} className='slide'>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MoviesSection;
