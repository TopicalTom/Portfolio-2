import { FC } from 'react';

// Style
import './Page.scss';

// Components
import DownloadCard from '../../components/DownloadCard';

// Guard
interface PageProps {
    className: string;
    children: any;
};

const Page: FC<PageProps> = ({ className, children }) => {
    return (
        <main className={`page ${className}`}>
            <div 
                className={`page__container ${className}__container`}>
                {children}
            </div>
            <DownloadCard />
        </main>
    );
};

export default Page;

/*
import { FC } from 'react';

// Style
import './Page.scss';

// Components
import SubHeader from '../SubHeader';

// Guard
interface PageProps {
    className: string;
    title: string;
    toggleable?: boolean;
    children: any;
};

const Page: FC<PageProps> = ({ className, title, toggleable, children }) => {
    return (
        <>
            <SubHeader 
                title={title}
                toggleable={toggleable ? true : false}
            />
            <main className={`page ${className}`}>
                <div 
                    className={`page__container ${className}__container`}>
                    {children}
                </div>
            </main>
        </>
    );
};

export default Page;

*/