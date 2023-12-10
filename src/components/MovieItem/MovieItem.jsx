import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function MovieItem ({movie}) {
    const dispatch = useDispatch();

    const history = useHistory()
    const movieToView = () => {
        console.log('movie.id:', movie.id)
        dispatch({
            type: 'SET_MOVIE_TO_VIEW',
            payload: movie.id
        })
        history.push(`/movieDetails/`)
    }

    return (
      <Grid>
        <Card sx={{ minWidth: 200, maxWidth: 200, minHeight: 450, maxHeigh: 450 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={movie.poster}
            title={movie.title}
            data-testid="toDetails"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button 
            size="small" 
            onClick={movieToView}
            >Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    )
}

export default MovieItem;