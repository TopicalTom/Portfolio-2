import { FC, useState, useEffect } from 'react';

// Styles
import './Preview.scss';

// Assets
import overlay from "../../assets/overlay/iPhoneOverlay.svg";

// Guard
interface PreviewProps {
    name: string;
    video: string;
    classname: string;
};

// Components

const Preview: FC<PreviewProps> = ({ name, video, classname }) => {
    const [ isPlaying, setIsPlaying ] = useState(false);

    const toggleVideo = () => {
        isPlaying 
            ?   setIsPlaying(false) 
            :   setIsPlaying(true);
    };

    // Watches for playback changes
    useEffect(() => {
        let player = document.getElementById(`${name}`);
        console.log(player);

        
        // Finds the video and toggles playback
        /*
        isPlaying 
            ?   player.pause() 
            :   player.play() 
            */
    }, [isPlaying, name]);

    return (
        <div className={`preview ${classname}`}>
            <img 
                className='preview__overlay' 
                src={overlay}
                alt=""
            />
            <video
                id={`${name}`}
                className='preview__video'
                src={video} 
                //autoPlay
                //loop
                playsInline
                muted
            />
            <button
                className="preview__toggle"
                onClick={() => toggleVideo()}
            >
                <img
                    className="promo__player"
                    //src={isPlaying ? pause : play}
                    alt=""
                />
            </button>
        </div>
    );
};

export default Preview;