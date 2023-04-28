import { FC, useState, useEffect } from 'react';

// Style
import './Quotes.scss';

// Components
import Controller from '../Controller';

interface Quote {
    takeaway: string;
    quote: string;
    author?: string;
}

// Guard
interface QuotesProps {
    className: string;
    content: Quote[];
};

const Quotes: FC<QuotesProps> = ({ className, content }) => {
    const [ active, setActive ] = useState(content[0]);
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const toggleNext = (index: number) => {
        let newIndex = index;

        if (index < content.length - 1) {
            setActive(content[newIndex + 1]);
            setCurrentIndex(newIndex + 1);
        } else {
            setActive(content[0]);
            setCurrentIndex(0);
        }
    };

    const togglePrevious = (index: number) => {
        let newIndex = index;

        if (index !== 0) {
            setActive(content[newIndex - 1]);
            setCurrentIndex(newIndex - 1);
        } else {
            setActive(content[content.length - 1]);
            setCurrentIndex(content.length - 1);
        }
    };

    // Quote Change Handler
    useEffect(() => {
        // Sets Active Quote
        setActive(content[0]);
        setCurrentIndex(0);
    }, [content]);

    return (
        <div className={`quotes ${className}`}>
            <div className='quotes__card'>
                <h3>{active.takeaway}</h3>
                <p>"{active.quote}"</p>
            </div>
            <Controller 
                className='quotes__controller'
                count={content.length}
                currentIndex={currentIndex}
                next={toggleNext}
                previous={togglePrevious}
            />
        </div>
    );
};

export default Quotes;