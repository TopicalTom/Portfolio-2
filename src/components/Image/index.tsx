import { FC } from 'react';

// Style
import './Image.scss';

// Guard
interface ImageProps {
    className: string;
    content: Asset | undefined;
};

interface Asset {
    name: string;
    type: string;
    file: string;
    order: number;
}

const Image: FC<ImageProps> = ({ className, content }) => {
    
    if ( content === undefined ) { return <></> };
    
    return (
        <img 
            className={`image ${className}`}
            src={content.file}
            alt={content.name}
        />
    );
};

export default Image;