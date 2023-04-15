import { FC, useEffect } from 'react';

// Styles
import "./Project.scss";

// Components
import Page from '../../components/Page';

const Fraction: FC = () => {

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls initial Project Previews
    }, []);

    return (
        <Page title='Fraction' className='project'>
            <p>Fraction</p>
        </Page>
    );
};

export default Fraction;