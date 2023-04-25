import { FC } from 'react';

// Styles
import './Card.scss';

// Guard
interface CardProps {
    title: string;
    caption: string;
    color?: string;
};

// Components

const Card: FC<CardProps> = ({ title, caption, color }) => {
    //const themedBackground = color ? color : 'red';

    return (
        <article 
            className='card'
            style={{ background: color}}>
            <h4>{title}</h4>
            <h3>{caption}</h3>
        </article>
    );
};

export default Card;