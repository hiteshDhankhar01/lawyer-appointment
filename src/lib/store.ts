import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload;
        },
        clearUser: (state) => {
            state.name = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

export default store;
