import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface ThemeState {
    theme: string
};

const initialState: ThemeState = {
    theme: 'dark'
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
        }
    },
});

export const { setTheme } = themeSlice.actions;
export const themeSelector = ( state: RootState ) => state.theme;
export const themeReducer = themeSlice.reducer;