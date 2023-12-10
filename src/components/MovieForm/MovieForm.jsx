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

    const setGenre = (value) => {
        selectedGenre = value;
        return selectedGenre;
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
            />
            <br /><br />
            <>Genre: </>
            <select name="genre"
                onChange={(e) => setGenre(e.target.value)}
                defaultValue=''>
                <option value=''></option>
                {genres.map(genre => {
                    return <option key={genre.id} value={genre.id}>{genre.name}</option>
                })}
            </select>
            <br /><br />
            <Button size="small" onClick={handleSubmit}>Submit</Button>
            <Button size="small" onClick={handleCancel}>Cancel</Button>
        </div>
    )
}

export default MovieForm;