import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Movies.scss';
import { Link } from 'react-router-dom';

function Movies({ movies = [], title }) {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true, // Autoplay özelliği
        autoplaySpeed: 3000, // Otomatik kaydırma hızı
    };

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

export default Movies;
