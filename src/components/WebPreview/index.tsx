import { FC } from 'react';

// Style
import './WebPreview.scss';

// Guard
interface WebPreviewProps {
    className: string;
    content: Asset | undefined;
};

interface Asset {
    name: string;
    type: string;
    file: string;
    order: number;
};

const WebPreview: FC<WebPreviewProps> = ({ className, content }) => {
    if ( content === undefined ) { return <></> };

    return (
        <video
            id={`${content.name}`}
            className={`web ${className}`}
            src={content.file} 
            autoPlay
            loop
            playsInline
            muted
        />
    );
};

export default WebPreview;