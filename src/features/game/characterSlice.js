import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    characters: [],
}

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            action.payload.characters.forEach((char) => {
                state.characters.push(char.data())
            })
        }
    }
});

export const { setCharacters } = characterSlice.actions

export const selectCharacters = state => state.characters

export default characterSlice.reducer