import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface Asset {
    name: string;
    type: string;
    file: string;
    order: number;
}

export interface Project {
    name: string;
    description: string;
    type: string;
    imagePreview: Asset;
    videoPreview: Asset;
    order: number;
}

interface FeaturedState {
    isLoadingFeatured: boolean,
    workProjects: Project[],
    personalProjects: Project[]
};

const initialState: FeaturedState = {
    isLoadingFeatured: false,
    workProjects: [],
    personalProjects: []
};

const featuredSlice = createSlice({
    name: 'featured',
    initialState,
    reducers: {
        setLoadingFeatured: (
            state, 
            { payload }: PayloadAction<boolean>
        ) => {
            state.isLoadingFeatured = payload;
        },
        setWorkProjects: (
            state, 
            { payload }: PayloadAction<Project[]>
        ) => {
            state.workProjects = payload;
        },
        setPersonalProjects: (
            state, 
            { payload }: PayloadAction<Project[]>
        ) => {
            state.personalProjects = payload;
        },
    },
});

export const { 
    setPersonalProjects,
    setWorkProjects,
    setLoadingFeatured 
} = featuredSlice.actions;
export const featuredSelector = ( state: RootState ) => state.featured;
export const featuredReducer = featuredSlice.reducer;