import { FC, useState, useEffect } from 'react';

// Styles
import './AppPreview.scss';

// Assets
import overlay from "../../assets/overlay/iPhoneX.svg";

// Guard
interface AppPreviewProps {
    classname: string;
    content: Asset | undefined;
};

interface Asset {
    name: string;
    type: string;
    file: string;
    order: number;
};

// Components

const AppPreview: FC<AppPreviewProps> = ({ classname, content }) => {
    const [ isPlaying, setIsPlaying ] = useState(false);

    return (
        <div className={`app ${classname}`}>
            <img 
                className='app__overlay' 
                src={overlay}
                alt=""
            />
            <div className='app__mask'>
                {content !== undefined
                    ?   <video
                            id={`${content.name}`}
                            className='app__video'
                            src={content.file} 
                            autoPlay
                            loop
                            playsInline
                            muted
                        />
                    :   null
                }
            </div>
        </div>
    );
};

export default AppPreview;