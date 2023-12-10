import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

function MovieDetails () {
    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();
    const history = useHistory()
    const { id } = useParams()
    let movieToDisplay = {};
    movie(movies);
    useEffect(() => {
        dispatch({ 
          type: 'SAGA/FETCH_MOVIES'
        });
      }, []);

    const genres = useSelector(store => store.genreOfMovieToView);

    function movie(moviesArray) {
        console.log('in movie function');
        for (let i=0; i < moviesArray.length; i++) {
            if (Number(id) === moviesArray[i].id)
            movieToDisplay = moviesArray[i]
        }
        return movieToDisplay;
    }
    
    const backToList = () => {
        history.push(`/`)
    }
    const editMovie = () => {
        history.push(`/editMovie/${id}`)
    }
    return(
        <div data-testid="movieDetails">
            <Button size="small" onClick={editMovie}>Edit Movie</Button>
            <br />
            <img src={movieToDisplay.poster}></img>
            <h2>{movieToDisplay.title}</h2>
            <p>{movieToDisplay.description}</p>
            <h4>Genres:</h4>
            <>
                {genres.map((genre, index) => {
                    return <p key={index}>{genre.genre}</p>
                })}
            </>
            <Button size="small" data-testid="toList" onClick={backToList}>Back to movie list</Button>
        </div>
    )
}

export default MovieDetails;