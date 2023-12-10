import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';


function MovieDetails () {
    const movieIdToView = useSelector(store => store.movieToView);
    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();
    const history = useHistory()
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

    const backToList = () => {
        history.push(`/`)
    }
    
    return(
        <div>
            <Button 
            size="small" 
            onClick={backToList}
            >Back to movie list</Button>
            <br />
            <img src={movieToDisplay.poster}></img>
            <h2>{movieToDisplay.title}</h2>
            <p>{movieToDisplay.description}</p>
            <h4>Genres:</h4>
            <>
                {genres.map(genre => {
                    return <p>{genre.genre}</p>
                })}
            </>
            <Button 
            size="small" 
            onClick={backToList}
            >Back to movie list</Button>
        </div>
    )
}

export default MovieDetails;