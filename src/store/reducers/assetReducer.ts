import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface Asset {
    name: string;
    type: string;
    file: string;
    order: number;
}

interface AssetState {
    isLoadingAssets: boolean,
    assets: Asset[]
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
            { payload }: PayloadAction<Asset[]>
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