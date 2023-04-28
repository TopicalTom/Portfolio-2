import { FC } from 'react';

// Styles
import './Caption.scss';

// Guard
interface CaptionProps {
    className: string;
    title: string;
    caption: string;
};

const Caption: FC<CaptionProps> = ({ className, title, caption }) => {

    return (
        <div className={`${className} caption`}>
            <span>{title}</span>
            <span>{caption}</span>
        </div>
    );
};

export default Caption;