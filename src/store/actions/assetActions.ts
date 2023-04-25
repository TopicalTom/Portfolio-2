import firebase from '../../firebase';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    getFirestore, 
    getDocs, 
    collection, 
    orderBy, 
    query
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
        const collectionRef = collection(firestore, "project", project, "assets");
        const docQuery = query(collectionRef, orderBy("order", "asc"));
        const docsSnapshot = await getDocs(docQuery);

        // Stores Featured Project Details
        if (docsSnapshot) {
            let assets: any[] = [];

            // Stores all Project-Specific Assets
            docsSnapshot.forEach((doc) => {
                const allAssets = doc.data();
                assets.push(allAssets);
            });
            dispatch(setAssets(assets));
        };
    } catch (err) {
        console.log(err);
    } finally {
        // Removes Loading State
        dispatch(setLoadingAssets(false));
    };
};