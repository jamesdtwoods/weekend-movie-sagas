import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

function MovieList() {
  const history = useHistory()
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ 
      type: 'SAGA/FETCH_MOVIES'
    });
  }, []);

  const toAddMovie = () => {
    history.push("/addMovie")
  }

  return (
    <main>
      <h1>MovieList</h1>
      <Button size="small" onClick={toAddMovie} >Add Movie</Button>
      <br />
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
