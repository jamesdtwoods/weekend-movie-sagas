import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

function MovieEditForm () {
    const dispatch = useDispatch()
    const history = useHistory()
    const movies = useSelector(store => store.movies);
    const { id } = useParams()
    let movieToDisplay = {};
    movie(movies);
    useEffect(() => {
        dispatch({ 
          type: 'SAGA/FETCH_MOVIES'
        });
      }, []);

    function movie(moviesArray) {
        for (let i=0; i < moviesArray.length; i++) {
            if (Number(id) === moviesArray[i].id)
            movieToDisplay = moviesArray[i]
        }
        return movieToDisplay;
    }
    const [titleInput, setTitleInput] = useState(movieToDisplay.title);
    const [posterInput, setPosterInput] = useState(movieToDisplay.poster);
    const [descriptionInput, setDescriptionInput] = useState(movieToDisplay.description);

    const handleSubmit = () => {
        dispatch({
            type: 'SAGA/EDIT_MOVIE',
            payload: { 
                id: id,
                title: titleInput, 
                poster: posterInput, 
                description: descriptionInput
            }
        })
        history.push(`/movieDetails/${id}`)
    }

    const handleCancel = () => {
        history.push("/")
    }


    return(
        <div>
            <>Title: </>
            <input
                onChange={(e) => setTitleInput(e.target.value)}
                value={titleInput}
                type='text'
                placeholder='Title'
            />
            <br /><br />
            <>Poster: </>
            <input
                onChange={(e) => setPosterInput(e.target.value)}
                value={posterInput}
                type='text'
                placeholder='Poster URL'
            />
            <br /><br />
            <textarea
                onChange={(e) => setDescriptionInput(e.target.value)}
                name={descriptionInput}
                id='description_input'
                placeholder='Description'
                rows="4"
                cols="50"
            >{descriptionInput}</textarea>
            <br /><br />
            <Button 
            size="small" 
            onClick={handleSubmit}
            >Submit</Button>
            <Button 
            size="small" 
            onClick={handleCancel}
            >Cancel</Button>
        </div>
    )
}

export default MovieEditForm;