import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface AssetState {
    isLoadingAssets: boolean,
    assets: string[]
};

const initialState: AssetState = {
    isLoadingAssets: false,
    assets: []
};

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        setLoadingAssets: (
            state, 
            { payload }: PayloadAction<boolean>
        ) => {
            state.isLoadingAssets = payload;
        },
        setAssets: (
            state, 
            { payload }: PayloadAction<string[]>
        ) => {
            state.assets = payload;
        }
    },
});

export const { 
    setAssets,
    setLoadingAssets 
} = assetsSlice.actions;
export const assetsSelector = ( state: RootState ) => state.assets;
export const assetsReducer = assetsSlice.reducer;