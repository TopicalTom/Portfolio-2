import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { setTheme } from '../reducers';

// Will Check Local Storage for Theme Preferences
export const checkStoredTheme = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setTheme('dark'));
    } catch (err) {
        console.log(err)
        //toast(err.toString());
    } finally {
        dispatch(setTheme('dark'));
    };
};

export const toggleDarkTheme = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setTheme('dark'));
    } catch (err) {
        console.log(err)
        //toast(err.toString());
    } finally {
        dispatch(setTheme('dark'));
    };
};

export const toggleLightTheme = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setTheme('light'));
    } catch (err) {
        console.log(err)
        //toast(err.toString());
    } finally {
        dispatch(setTheme('light'));
    };
};