import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    characters: [],
}

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            state.characters.push(action.payload.characters)
        },
        unsetCharacters: (state) => {
            state.characters = []
        }
    }
});

export const { setCharacters, unsetCharacters } = characterSlice.actions

export const selectCharacters = state => state.characters.characters

export default characterSlice.reducer