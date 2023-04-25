import { FC, useState, useEffect } from 'react';

// Styles
import './Carousel.scss';

// Components
import Image from '../Image';
import Video from '../Video';
import Controller from '../Controller';

interface Asset {
    name: string;
    type: string;
    file: string;
    order: number;
};

// Guard
interface CarouselProps {
    className: string;
    type: 'image' | 'video';
    data: Asset[]
};

const Carousel: FC<CarouselProps> = ({ className, type, data }) => {
    const [ active, setActive ] = useState(data[0]);
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const toggleActive = (direction: string) => {
        let newIndex = currentIndex;

        switch (direction) {
            case 'back':
                if (currentIndex > 0) {
                    setActive(data[newIndex--]);
                    setCurrentIndex(newIndex--);
                } else {
                    setActive(data[2]);
                    setCurrentIndex(2);
                }
                break;
            case 'next':
                if (currentIndex < data.length) {
                    setActive(data[newIndex++]);
                    setCurrentIndex(newIndex++);
                } else {
                    setActive(data[0]);
                    setCurrentIndex(0);
                }
        };
    };

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls Rally Assets
        setActive(data[0]);
    }, [data]);

    switch (type) {
        case 'image':
            return (
                <div className={`carousel ${className}`}>
                    <Image
                        className='carousel__image' 
                        content={active}
                    />
                    <Controller 
                        className='carousel__controller'
                        count={data.length}
                        currentIndex={currentIndex}
                        toggleActive={toggleActive}
                    />
                </div>
            );
        case 'video':
            return (
                <div className={`carousel ${className}`}>
                    <Video 
                        className='carousel__video' 
                        content={active}
                    />
                    <Controller 
                        className='carousel__controller'
                        count={data.length}
                        currentIndex={currentIndex}
                        toggleActive={toggleActive}
                    />
                </div>
            );
    }    
};

export default Carousel;

/*
import { FC, useState, useEffect } from 'react';

// Styles
import './Carousel.scss';

// Components
import Image from '../Image';
import Video from '../Video';
import Controller from '../Controller';

interface Asset {
    name: string;
    type: string;
    file: string;
    order: number;
};

// Guard
interface CarouselProps {
    className: string;
    type: 'image' | 'video';
    content: Asset[]
};

const Carousel: FC<CarouselProps> = ({ className, type, content }) => {
    const [ active, setActive ] = useState(content[0]);
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const toggleActive = (direction: string, count: number, currentIndex: number) => {
        let newIndex = currentIndex;

        switch (direction) {
            case 'back':
                if (currentIndex > 1) {
                    setActive(content[newIndex--]);
                    setCurrentIndex(newIndex--);
                } else {
                    setActive(content[count]);
                    setCurrentIndex(count);
                }
                break;
            case 'next':
                if (currentIndex < count) {
                    setActive(content[newIndex++]);
                    setCurrentIndex(newIndex++);
                } else {
                    setActive(content[0]);
                    setCurrentIndex(0);
                }
        };
    };

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls Rally Assets
        setActive(content[0]);
    }, [content]);

    return (
        <div className={`carousel ${className}`}>
            {type === 'video' &&
                <Video 
                    className='carousel__video' 
                    src={active.file} 
                    ariaLabel={active.name} 
                />
            }
            {type === 'image' &&
                <Image
                    className='carousel__video' 
                    src={active.file} 
                    altText={active.name} 
                />
            }
            <Controller 
                className='carousel__controller'
                count={content.length}
                currentIndex={currentIndex}
                toggleActive={toggleActive}
            />
        </div>
    );
    
};

export default Carousel;
*/

/*
import { FC, useState, useEffect } from 'react';

// Styles
import './Carousel.scss';

// Components
import Image from '../Image';
import Video from '../Video';

interface Asset {
    name: string;
    type: string;
    file: string;
    order: number;
};

// Guard
interface CarouselProps {
    className: string;
    type: 'image' | 'video';
    content: Asset[]
};

const Carousel: FC<CarouselProps> = ({ className, type, content }) => {
    const [ active, setActive ] = useState(content[0]);
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const handleSwitch = (index: number) => {
        setActive(content[index]);
        setCurrentIndex(index);
    };

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls Rally Assets
        setActive(content[0]);
    }, [content]);

    return (
        <div className={`carousel ${className}`}>
            {type === 'video' &&
                <Video 
                    className='carousel__video' 
                    src={active.file} 
                    ariaLabel={active.name} 
                />
            }
            {type === 'image' &&
                <Image
                    className='carousel__video' 
                    src={active.file} 
                    altText={active.name} 
                />
            }
            <div 
                className='carousel__controller'
                style={{ gridTemplateColumns: `repeat(${content.length}, auto)`}}>
                {content.map((item, index) => {
                    return (
                        <div 
                            key={index}
                            className={`carousel__toggle ${currentIndex === index && "active"}`}
                            onClick={() => handleSwitch(index)}>
                            <span 
                                className="carousel__label">
                                {item.name}
                            </span>
                        </div>  
                    )
                })}
            </div>
        </div>
    );
    
};

export default Carousel;
*/