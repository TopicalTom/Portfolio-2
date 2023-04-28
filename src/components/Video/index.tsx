import { FC } from 'react';

// Style
import './Video.scss';

// Guard
interface VideoProps {
    className: string;
    content: Asset | undefined;
};

interface Asset {
    name: string;
    type: string;
    file: string;
    order: number;
};

const Video: FC<VideoProps> = ({ className, content }) => {
    if ( content === undefined ) { return <></> };

    return (
        <iframe 
            className={`video ${className}`}
            title=''
            allow={`accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`}
            allowFullScreen
            src={content.file}
            aria-label={content.name}
        />
    );
};

export default Video;