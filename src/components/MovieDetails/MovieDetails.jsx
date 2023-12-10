import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails () {
    const movieDetails = useSelector(store => store.movieDetails);
    console.log(movieDetails);
    return(
        <>
        {movieDetails.map(movie => {
            return (
                <div key={movie.id}>
                    <img src={movie.poster}></img>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                </div>
            );
        })}
        </>
    )
}

export default MovieDetails;