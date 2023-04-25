import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface ThemeState {
    theme: string;
    accent: string;
};

const initialState: ThemeState = {
    theme: 'dark',
    accent: 'rgb(253, 45, 85)'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (
            state, 
            { payload }: PayloadAction<string>
        ) => {
            state.theme = payload;
        },
        setAccent: (
            state, 
            { payload }: PayloadAction<string>
        ) => {
            state.accent = payload;
        },
    },
});

export const { setTheme, setAccent } = themeSlice.actions;
export const themeSelector = ( state: RootState ) => state.theme;
export const themeReducer = themeSlice.reducer;