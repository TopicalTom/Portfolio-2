import { FC } from 'react';
import { Element } from 'react-scroll';

// Styles
import './Section.scss';

// Guard
interface SectionProps {
    initial?: boolean;
    name: string;
    color: string;
    children: any;
};

// Components

const Section: FC<SectionProps> = ({ initial, name, color, children }) => {
    return (
        <Element
            name={`${name}`}
            className='section'>
            {!initial   
                ?   <div 
                        className='section__marker'
                        style={{'background': color}}>
                        {name}
                    </div>
                :   null
            }
            {children}
        </Element>
    );
};

export default Section;