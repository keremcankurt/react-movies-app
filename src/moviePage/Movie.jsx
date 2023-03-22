import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../services/movie';
import "./Movie.scss"

function MoviePage() {
    const [movie, setMovie] = useState([]);
    const id = useParams().id;
    useEffect(() => {

        getSingleMovie(id).then(result => setMovie(result))
    }, []);
    const { backdrop_path, title, overview, release_date, vote_count, vote_average } = movie;

    return (
        <div className='movieWrapper'>
            <div className='movieInfo'>
                <h1>{title}</h1>
                <p className='overview'>{overview}</p>

                <div className='voteInfo'>
                    <span className='count'>{vote_count} votes</span>
                    <span style={{
                        backgroundImage: `linear-gradient(0deg, rgba(68, 255, 0, 1) ${parseFloat(Number(vote_average).toFixed(1)) * 10}%, rgba(0, 0, 0, 0) 0%)`,
                        display: 'inline-block',
                        padding: '4px 7px',
                        borderRadius: '50%'

                    }}>
                        {(Number(vote_average).toFixed(1))}
                    </span>
                </div>
            </div>
            <img
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            />
        </div>
    )
}

export default MoviePage