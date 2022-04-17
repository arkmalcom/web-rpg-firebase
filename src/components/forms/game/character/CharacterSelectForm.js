import Grid from '@mui/material/Grid';
import React from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';

import { db } from '../../../../utils/firebase-config';
import { selectUserId } from '../../../../features/auth/userSlice';
import { setCharacters, selectCharacters } from '../../../../features/game/characterSlice'

function CharacterSelectForm(props) {
    const dispatch = useDispatch()
    const userId = useSelector(selectUserId);
    const characters = useSelector(selectCharacters);

    const fetchCharacters = async () => {
        const characterQuery = query(collection(db, "character"), where("uid", "==", userId))
        const characterSnapshot = await getDocs(characterQuery);
        dispatch(setCharacters({
            characters: characterSnapshot
        }))
    }

    if (userId) {
        fetchCharacters();
    }

    return (
        <Grid container>
            {console.log(characters)}
        </Grid>
    );
}

export default CharacterSelectForm;