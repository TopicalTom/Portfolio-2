import { FC } from 'react';
import { Element } from 'react-scroll';

// Styles
import './Section.scss';

// Guard
interface SectionProps {
    initial?: boolean;
    name: string;
    className: string;
    children: any;
};

// Components

const Section: FC<SectionProps> = ({ initial, name, className, children }) => {
    return (
        <Element
            name={`${name}`}
            className={`section ${className}`}>
            {children}
        </Element>
    );
};

export default Section;