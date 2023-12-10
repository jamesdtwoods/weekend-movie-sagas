import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function MovieForm () {
    const dispatch = useDispatch()
    const history = useHistory()
    const genres = useSelector(store => store.genres);
    const [titleInput, setTitleInput] = useState('');
    const [posterInput, setPosterInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    let selectedGenre;

// need to get genres 

    useEffect(() => {
        dispatch({ 
        type: 'SAGA/FETCH_GENRES'
        });
    }, []);

    const handleSubmit = () => {
        dispatch({
            type: 'SAGA/CREATE_MOVIE',
            payload: { 
                title: titleInput, 
                poster: posterInput, 
                description: descriptionInput,
                genre_id: selectedGenre
            }
        })
        history.push("/")
    }

    const handleCancel = () => {
        history.push("/")
    }

    // for genres
    const setGenre = (value) => {
        selectedGenre = value;
        return selectedGenre;
    }

    return(
        <div>
            <input
                onChange={(e) => setTitleInput(e.target.value)}
                value={titleInput}
                type='text'
                placeholder='Title'
            />
            <input
                onChange={(e) => setPosterInput(e.target.value)}
                value={posterInput}
                type='text'
                placeholder='Poster URL'
            />
            <input
                onChange={(e) => setDescriptionInput(e.target.value)}
                value={descriptionInput}
                type='textarea'
                placeholder='Description'
            />
            <br />

            <select name="genre"
                onChange={(e) => setGenre(e.target.value)}
                defaultValue=''>
                {genres.map(genre => {
                    return <option key={genre.id} value={genre.id}>{genre.name}</option>
                })}
            </select>
            
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

export default MovieForm;