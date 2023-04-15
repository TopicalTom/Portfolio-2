import { combineReducers } from '@reduxjs/toolkit';
import { 
    assetsReducer, 
    themeReducer 
} from './reducers';

const rootReducer = combineReducers({ 
    theme: themeReducer,
    assets: assetsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export * as actionCreators from './actions';
export default rootReducer;