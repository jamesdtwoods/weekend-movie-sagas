import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';

function MovieDetails () {
    const movieIdToView = useSelector(store => store.movieToView);
    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();
    let movieToDisplay = {};
    movie();
    useEffect(() => {
        dispatch({ 
          type: 'SAGA/FETCH_MOVIE_GENRES',
          payload: movieIdToView
        });
      }, []);

    const genres = useSelector(store => store.genres);

    function movie() {
        for (let i=0; i < movies.length; i++) {
            if (movieIdToView === movies[i].id)
            movieToDisplay = movies[i]
        }
        return movieToDisplay;
    }
    
    return(
        <div>
            <img src={movieToDisplay.poster}></img>
            <h2>{movieToDisplay.title}</h2>
            <p>{movieToDisplay.description}</p>
            <h4>Genres:</h4>
            <>
                {genres.map(genre => {
                    return <p>{genre.genre}</p>
                })}
            </>
        </div>
    )
}

export default MovieDetails;