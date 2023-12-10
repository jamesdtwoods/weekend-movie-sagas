import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import Grid from '@mui/material/Unstable_Grid2';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ 
      type: 'SAGA/FETCH_MOVIES'
    });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
      <Grid container spacing={2}>
          {movies.map(movie => {
            return (
              <div data-testid='movieItem' key={movie.id}>
                <MovieItem movie={movie} />
              </div>
            );
          })}
        </Grid>
      </section>
    </main>

    




  );
}


export default MovieList;
