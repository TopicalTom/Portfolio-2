import { combineReducers } from '@reduxjs/toolkit';
import { 
    assetsReducer, 
    themeReducer,
    featuredReducer
} from './reducers';

const rootReducer = combineReducers({ 
    theme: themeReducer,
    assets: assetsReducer,
    featured: featuredReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export * as actionCreators from './actions';
export default rootReducer;