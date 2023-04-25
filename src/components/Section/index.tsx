import { FC } from 'react';
import { Element } from 'react-scroll';

// Styles
import './Section.scss';

// Guard
interface SectionProps {
    initial?: boolean;
    name: string;
    color: string;
    className: string;
    children: any;
};

// Components

const Section: FC<SectionProps> = ({ initial, name, className, color, children }) => {
    return (
        <Element
            name={`${name}`}
            className={`section ${className}`}>
            {!initial &&    <div 
                                className='section__marker'
                                style={{'background': color}}>
                                {name}
                            </div>}
            {children}
        </Element>
    );
};

export default Section;