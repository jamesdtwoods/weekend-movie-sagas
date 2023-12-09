import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
      <Grid container spacing={2}>
          {movies.map(movie => {
            return (
              <div data-testid='movieItem' key={movie.id}>
                <Grid>
                  <Card sx={{ maxWidth: 200 }}>
                    <CardMedia
                      sx={{ height: 300 }}
                      image={movie.poster}
                      title={movie.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </div>
            );
          })}
        </Grid>
      </section>
    </main>

    




  );
}


export default MovieList;
