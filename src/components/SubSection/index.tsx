import { FC } from 'react';
import { Element } from 'react-scroll';

// Styles
import './SubSection.scss';

// Guard
interface SubSectionProps {
    name?: string;
    children: any;
};

// Components

const SubSection: FC<SubSectionProps> = ({ name, children }) => {
    return (
        <Element
            name={`${name}`}
            className='subsection'>
            {children}
        </Element>
    );
};

export default SubSection;