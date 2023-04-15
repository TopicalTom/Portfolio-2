import firebase from '../../firebase';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    getFirestore, 
    doc, 
    getDoc, 
} from "firebase/firestore";
import { 
    setLoadingAssets,
    setAssets
} from '../reducers';

const firestore = getFirestore(firebase);

// Will Check FireStore database for project assets
export const fetchAssets = (project: string): AppThunk => async (dispatch: Dispatch) => {
    try {
        // Prepares with a loading/initial state
        dispatch(setLoadingAssets(true));
        dispatch(setAssets([]));

        // FireStore references
        const docRef = doc(firestore, "projects", project);
        const docSnap = await getDoc(docRef);

        // Stores found Assets
        if (docSnap.exists()) {
            console.log('Pulled');
            dispatch(setAssets(['Test']));
        }
    } catch (err) {
        console.log(err);
    } finally {
        // Removes Loading State
        dispatch(setLoadingAssets(false));
    };
};