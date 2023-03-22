import { useCallback, useEffect, useState } from "react";
import FeaturedMovie from "../components/featured-movie/FeaturedMovie";
import Header from "../components/header/Header";
import Movies from "../components/movies/Movies";
import MoviesSection from "../components/movies-section/MoviesSection";
import { getGenres, getPopularMovies, getTopRatedMovies } from "../services/movie";

export default function HomePage() {
    const [popularMovies, setPopularMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])


    useEffect(useCallback(() => {
        getPopularMovies()
            .then(result => setPopularMovies(result.results));
        getGenres()
            .then(result => setGenres(result.genres));
        getTopRatedMovies()
            .then(result => setTopRatedMovies(result.results));

    }), []);
    return (
        <>

            <FeaturedMovie movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]} />
            <div className="genres">
                <Movies title="Popular Movies" movies={popularMovies} />
                <Movies title="Top Rated Movies" movies={topRatedMovies} />
                {genres.map(genre => (<MoviesSection key={genre.id} genre_id={genre.id} title={genre.name} />))}
            </div>
        </>
    )
}