import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function MovieForm () {
    const dispatch = useDispatch()
    const history = useHistory()
    const [titleInput, setTitleInput] = useState('');
    const [posterInput, setPosterInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [genre, setGenre] = useState('');

// need to get genres 



    const handleSubmit = () => {
        dispatch({
            type: 'SAGA/CREATE_MOVIE',
            payload: { 
                title: titleInput, 
                poster: posterInput, 
                description: descriptionInput 
            }
        })
        history.push("/")
    }

    const handleCancel = () => {
        history.push("/")
    }

    // for genres
    // const handleInputChange = (value) => {
    //     console.log('category: ', value);

    //     dispatch({
    //         type: 'SAGA/SET_CATEGORY',
    //         payload: {
    //             data: value,
    //             id: favoriteGif.id
    //         }
    //     })
    // }

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

            {/* <select name="category"
                        onChange={(e) => handleInputChange(e.target.value)}
                        defaultValue={Number(favoriteGif.category_id)}>
                <option value=""></option>
                <option value="1">wild</option>
                <option value="2">uproarious</option>
                <option value="3">poignant</option>
                <option value="4">felicitous</option>
                <option value="5">whimsical</option>
            </select> */}
            
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