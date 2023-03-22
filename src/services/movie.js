import { post, get } from "./request"
const BASE_URL = "https://api.themoviedb.org/3";
export const getPopularMovies = () => get(`${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_THE_MOVIE_DB_API_KEY}`)
export const getGenres = () => get(`${BASE_URL}/genre/movie/list?api_key=${import.meta.env.VITE_THE_MOVIE_DB_API_KEY}`)
export const getTopRatedMovies = () => get(`${BASE_URL}/movie/top_rated?api_key=${import.meta.env.VITE_THE_MOVIE_DB_API_KEY}`)
export const getSingleMovie = id => get(`${BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_THE_MOVIE_DB_API_KEY}`)
export const getMoviesByGenre = genre_id => get(`${BASE_URL}/discover/movie?api_key=${import.meta.env.VITE_THE_MOVIE_DB_API_KEY}&with_genres=${genre_id}`)
export const getSearchedMovies = query => get(`${BASE_URL}/search/movie?api_key=${import.meta.env.VITE_THE_MOVIE_DB_API_KEY}&query=${query}`)