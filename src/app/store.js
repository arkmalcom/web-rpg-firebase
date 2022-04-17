import { configureStore } from '@reduxjs/toolkit';

import characterReducer from '../features/game/characterSlice';
import userReducer from '../features/auth/userSlice';

export default configureStore({
    reducer: {
        character: characterReducer,
        user: userReducer,
    },
})