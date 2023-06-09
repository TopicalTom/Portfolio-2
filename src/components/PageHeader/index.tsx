import { FC } from 'react';

// Styles
import './PageHeader.scss';

// Components
import Button from '../Button';

// Guard
interface PageHeaderProps {
    title: string;
    toggleable?: boolean;
};

const PageHeader: FC<PageHeaderProps> = ({ title, toggleable }) => {

    return (
        <nav className='pageheader'>
            <div className='pageheader__container'>
                <Button
                    className='pageheader__button'
                    type='tertiary'
                    size='small'
                    to='/'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                        className="pageheader__chevron">
                        <g>
                            <rect width="24" height="24" opacity="0" transform="rotate(90 12 12)" />
                            <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                        </g>
                    </svg>
                </Button>
            </div>
        </nav>
    );
};

export default PageHeader;