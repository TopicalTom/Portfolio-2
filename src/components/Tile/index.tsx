import { FC } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Tile.scss';

// Components
import Preview from '../AppPreview';
import Image from '../Image';

interface Asset {
    name: string;
    type: string;
    file: string;
    order: number;
}

interface Project {
    name: string;
    description: string;
    type: string;
    imagePreview: Asset;
    videoPreview: Asset;
    order: number;
}

interface TileProps {
    className: string;
    type: string;
    platform: string;
    pathname: string;
    content: Project;
}

const Tile: FC<TileProps> = ({ className, content, type, platform, pathname }) => {
    return (
        <Link
            className={`${className} tile ${platform}`}
            to={`${pathname}`}>
            <div>
                <h3>{content.name}</h3>
                <h5>{type}</h5>
            </div>
            <div>
                <Image 
                    className={`tile__preview tile__preview--${platform}`} 
                    content={content.imagePreview}
                />
            </div>
        </Link>
    );
};

export default Tile;