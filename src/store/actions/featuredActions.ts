import firebase from '../../firebase';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    getFirestore, 
    collection, 
    query,
    where,
    getDocs, 
} from "firebase/firestore";
import { 
    setLoadingFeatured,
    setWorkProjects,
    setPersonalProjects
} from '../reducers';

const firestore = getFirestore(firebase);

const fetchProjects = async (type: string) => {
    const collectionRef = collection(firestore, "project");
    const docQuery = query(
        collectionRef, 
        where("featured", "==", true), 
        where("type", "==", type)
    );
    const querySnapshot = await getDocs(docQuery);

    // Stores Featured Project Details
    if (querySnapshot) {
        let featured: any[] = [];

        // Stores all Featured Projects
        querySnapshot.forEach((doc) => {
            const featuredAssets = doc.data();
            featured.push(featuredAssets);
        });
        return featured;
    };
};

// Will Check FireStore database for project assets
export const fetchFeatured = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        // Prepares with a loading/initial state
        dispatch(setLoadingFeatured(true));
        dispatch(setPersonalProjects([]));
        dispatch(setWorkProjects([]));

        // Fetches Featured Work & Personal Projects
        const personalProjects = await fetchProjects('personal');
        const workProjects = await fetchProjects('work');

        // Stores Featured Work & Personal Projects (if exists)
        if (personalProjects) { dispatch(setPersonalProjects(personalProjects)); };
        if (workProjects) { dispatch(setWorkProjects(workProjects)); };
    } catch (err) {
        console.log(err);
    } finally {
        // Removes Loading State
        dispatch(setLoadingFeatured(false));
    };
};

/*
import firebase from '../../firebase';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    getFirestore, 
    collection, 
    query,
    where,
    getDocs, 
    orderBy
} from "firebase/firestore";
import { 
    setLoadingFeatured,
    setFeatured
} from '../reducers';

const firestore = getFirestore(firebase);

// Will Check FireStore database for project assets
export const fetchFeatured = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        // Prepares with a loading/initial state
        dispatch(setLoadingFeatured(true));
        dispatch(setFeatured([]));

        // FireStore References
        const collectionRef = collection(firestore, "project");
        const docQuery = query(collectionRef, where("featured", "==", true));
        const querySnapshot = await getDocs(docQuery);

        // Stores Featured Project Details
        if (querySnapshot) {
            let featured: any[] = [];

            // Stores all Featured Projects
            querySnapshot.forEach((doc) => {
                const featuredAssets = doc.data();
                featured.push(featuredAssets);
            });
            dispatch(setFeatured(featured));
        };
    } catch (err) {
        console.log(err);
    } finally {
        // Removes Loading State
        dispatch(setLoadingFeatured(false));
    };
};

*/